import React, { useEffect, useState } from 'react';
import "./Services.css";
import ServicesList from './ServicesList';

const Services = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="services_container">
              <h2>OUR SERVICES</h2>
            <div className="services_box">
              
                {
                    services.map(service => <ServicesList service={service}></ServicesList>)
                }
            </div>
            
        </section>
    );
};

export default Services;