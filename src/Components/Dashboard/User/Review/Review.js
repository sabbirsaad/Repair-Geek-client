import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [review, setReview] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewData = {
            ...loggedInUser,
            name: data.name,
            companyName:data.company,
            serviceName:data.serviceName,
            description:data.description,
            date: new Date()
          };
          const url = `http://localhost:5000/addReview`;
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(reviewData),
          })
          .then((res) => {
            alert("Review Added")
          });
    };
    return (
        <div>
             <Sidebar></Sidebar>

             <div className="content">
            <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Row className="box">
            <Col md={7}>
                <label>Name</label> <br />
                <input

                  type="text"
                  className="form-input"
                  placeholder="Enter Your Name"
                  defaultValue={loggedInUser.name}
                  {...register('name',{required: true})}
                />
                 {errors.name && (
                                    <p className="text-danger">This field is required</p>
                                )}
              </Col>

              <Col md={7}>
                <label>Company Name</label> <br />
                <input

                  type="text"
                  className="form-input"
                  placeholder="Enter Your Company Name"
                  {...register('company',{required: true})}
                />
                 {errors.company && (
                                    <p className="text-danger">This field is required</p>
                                )}
              </Col>

              <Col md={7}>
                <label>Service Name</label> <br />
                <input

                  type="text"
                  className="form-input"
                  placeholder="Enter Service Name"
                  {...register('serviceName',{required: true})}
                />
                 {errors.serviceName && (
                                    <p className="text-danger">This field is required</p>
                                )}
              </Col>

              <Col md={7}>
                <label>Description</label> <br />
                <textarea
                  type="text"
                  className="form-input"
                  placeholder="Write a Description"
                  {...register('description', { required: true })}
                  rows="4"
                />
                 {errors.description && (
                                    <p className="text-danger">This field is required</p>
                                )}
              </Col>


              <Col md={12} className="d-flex justify-content-start mt-4">
                <input type="submit" className="btn-main" value="Submit" />
              </Col>
            </Row>
          </Container>
        </form>
           </div>
        </div>
    );
};

export default Review;