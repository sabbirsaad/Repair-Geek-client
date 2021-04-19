import React, { useEffect, useState } from 'react';
import "./Services.css";
import ServicesList from './ServicesList';
import loading from '../../../Images/loading.gif';

const Services = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        fetch('https://web-repair-geek.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="services_container">
              <h2>OUR SERVICES</h2>
              {
                  services.length === 0 && <div style={{marginTop:'100px'}}><img src={loading} alt=""/></div>
              }
            <div className="services_box">
              
                {
                    services.map(service => <ServicesList service={service}></ServicesList>)
                }
            </div>
            
        </section>
    );
};

export default Services;