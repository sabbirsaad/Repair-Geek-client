import React, { useEffect, useState } from 'react';
import TestimonialList from './TestimonialList';
import './Testimonial.css';
import loading from '../../../Images/loading.gif';

const Testimonial = () => {
    const [ reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://web-repair-geek.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[reviews])
    return (
        <section className="testimonial_container">
              <h2>USER REVIEWS</h2>
              {
                  reviews.length === 0 && <div style={{marginTop:'100px'}}><img src={loading} alt=""/></div>
              }
            <div className="testimonial_box">
              
                {
                    reviews.map(review => <TestimonialList review={review}></TestimonialList>)
                }
            </div>
            
        </section>
    );
};

export default Testimonial;