import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import { Col, Row } from 'react-bootstrap';
import ProcessPayment from '../Payment/ProcessPayment/ProcessPayment';
import Sidebar from '../../Sidebar/Sidebar';

const Book = () => {
 
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [booking, setBooking] = useState(null);
    const [appointment, setAppointment] =useState(null);
    
    useEffect(() => {
        fetch(`https://web-repair-geek.herokuapp.com/service/${id}`)
            .then( (res) => res.json())
            .then( data => {
                setBooking(data);
            });
    }, [id]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setAppointment(data);
    };

    const handlePaymentSuccess = paymentId => {
      const serviceDetails = {
          ...loggedInUser,
          appointment,
          paymentId,
          ServiceName: booking.name,
          imageURL: booking.imageURL,
          description: booking.description,
          price: booking.price,
          date: new Date(),
          status: "pending"
      };
      fetch('https://web-repair-geek.herokuapp.com/addServiceAppoinment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceDetails),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Your order placed successfully');
            });
    }

    // const addBooking = booking.find( book => parseInt(book.id) === parseInt(id));
    // console.log(addBooking);

    return (
        <div>
             <Sidebar></Sidebar>

            <div class="content">
            <div style={{display: appointment ? "none" : "block",paddingTop:'100px'}} className="form_content">
            <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <Row className="box">
              <Col md={7}>
                <label>Name</label> <br />
                <input

                  type="text"
                  className="form-input"
                  defaultValue={loggedInUser.name}
                  {...register('name',{required: true})}
                />
                 {errors.name && (
                                    <p className="text-danger">This field is required</p>
                                )}
              </Col>

              <Col md={7}>
                <label>Email</label> <br />
                <input
                  type="email"
                  className="form-input"
                  defaultValue={loggedInUser.email}
                  {...register('email', { required: true })}

                />
                 {errors.description && (
                                    <p className="text-danger">This field is required</p>
                                )}
              </Col>
               <Col md={7}>
               <label>Service Name</label> <br />
               <input
                 type="text"
                 className="form-input"
                 defaultValue={booking?.name}
                 {...register('serviceName')}
               />
                {errors.price && (
                                    <p className="text-danger">This field is required</p>
                                )}
             </Col>

              <Col md={7} className="d-flex justify-content-start mt-4">
                <input type="submit" className="btn-main" value="Submit" />
              </Col>
            </Row>
        </form>
            </div>
            <div style={{display:appointment? "block" :" none"}}>
              <div  className="d-flex flex-column justify-content-center">
                <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}></ProcessPayment>
              </div>
              
            </div>
           </div>
        </div>
    );
};

export default Book;