import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';
import './AddService.css';
import Sidebar from '../../Sidebar/Sidebar';

const AddService = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            description:data.description,
            price:data.price,
            imageURL: imageURL
          };
          const url = `https://web-repair-geek.herokuapp.com/addService`;
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(eventData),
          })
          .then((res) => {
            alert("Service Added")
          });
    };
  
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "7db5336e4efbb2bbf63730ad81ba0181");
        imageData.append("image", event.target.files[0]);
    
        axios
          .post("https://api.imgbb.com/1/upload", imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
       
      };
  

    return (
        <div>
             <Sidebar></Sidebar>

            <div className="content">
              <h2>Add Service</h2>
            <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Row className="box">
              <Col md={7}>
                <label>Service Name</label> <br />
                <input

                  type="text"
                  className="form-input"
                  placeholder="Enter Service Name"
                  {...register('name',{required: true})}
                />
                 {errors.name && (
                                    <p className="text-danger">This field is required</p>
                                )}
              </Col>

              <Col md={7}>
                <label>Description</label> <br />
                <textarea
                  type="text"
                  className="form-input"
                  placeholder="Write a Description"
                  rows="4"
                  {...register('description', { required: true })}
                />
                  
                 {errors.description && (
                                    <p className="text-danger">This field is required</p>
                                )}
              </Col>
               <Col md={7}>
               <label>Service Price</label> <br />
               <input
                 type="text"
                 className="form-input"
                 placeholder="Enter Service Price"
                 {...register('price', { required: true })}
               />
                {errors.price && (
                                    <p className="text-danger">This field is required</p>
                                )}
             </Col>

              <Col md={7}>
                <label>Add Photo</label> <br />
                <input
                  type="file"
                  {...register('file',{ required: true })}
                  onChange={handleImageUpload}
                />
                 {errors.file && (
                                    <p className="text-danger">This field is required</p>
                                )}
              </Col>

              <Col md={12} className="d-flex justify-content-start mt-4">
                <input type="submit" className="btn-main" value="Save" />
              </Col>
            </Row>
          </Container>
        </form>
           </div>
        </div>
    );
};

export default AddService;