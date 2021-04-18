import React from 'react';
import FeaturesList from './FeaturesList';
import "./WhyUs.css";
import skill from '../../../Images/skill.svg';
import experience from '../../../Images/experience.svg';
import quality from '../../../Images/quality.svg';
import guarantee from '../../../Images/guarantee.svg';

const WhyUs = () => {
    const fakeData =[
        {
            id:1 ,
            img:skill,
            name:"Skill",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit dolorum veritatis, sequi iusto quos"
        },
        {
            id:2 ,
            img:experience,
            name:"Experience",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit dolorum veritatis, sequi iusto quos"
        },
        {
            id:3 ,
            img:quality,
            name:"Quality",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit dolorum veritatis, sequi iusto quos"
        },
        {
            id:4 ,
            img:guarantee,
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