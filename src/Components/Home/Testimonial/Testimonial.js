import React, { useEffect, useState } from 'react';
import TestimonialList from './TestimonialList';
import './Testimonial.css';

const Testimonial = () => {
    const [ reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[reviews])
    return (
        <section className="testimonial_container">
              <h2>USER REVIEWS</h2>
            <div className="testimonial_box">
              
                {
                    reviews.map(review => <TestimonialList review={review}></TestimonialList>)
                }
            </div>
            
        </section>
    );
};

export default Testimonial;