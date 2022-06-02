import React from 'react';
import './about.scss'
import groupPhoto from '../../images/Slice 1.jpg'

const About = () => {
  return (
    <section className="about">
       <div className="about__img">
         <img src={groupPhoto} alt="groupPhoto"/>
       </div>
      <h3 className="about__title">Online Experiences</h3>
      <p className="about__text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  );
};

export default About;