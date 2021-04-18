import React from 'react';
import FeaturesList from './FeaturesList';
import "./WhyUs.css";

const WhyUs = () => {
    const fakeData =[
        {
            id:1 ,
            name:"Skill",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit dolorum veritatis, sequi iusto quos"
        },
        {
            id:2 ,
            name:"Experience",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit dolorum veritatis, sequi iusto quos"
        },
        {
            id:3 ,
            name:"Quality",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit dolorum veritatis, sequi iusto quos"
        },
        {
            id:4 ,
            name:"Guarantee",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit dolorum veritatis, sequi iusto quos"
        }
    ]
    return (
        <section className="whyus_container">
            <h2>Why choose us</h2>
            <div className="whyus_box">
                {
                    fakeData.map(data => <FeaturesList data={data}></FeaturesList>) 
                }
            </div>
        </section>
    );
};

export default WhyUs;