import React from 'react'
import '../css/about.css'
import {Link} from 'react-scroll'

const About = () => {
  return (
    <section className='section about section-bg'>
      <article>

      <div className='about-text'>
        <h2>My Name is <span>Norvillie</span></h2>
        <h4>Web Developer</h4>
        
         <div className="float">
         
          <div className='about-img'>
            <img src="https://raw.githubusercontent.com/nozky/assets/master/picture/Norvillie-profilePix.jpg" alt="Norvillie Villaruel" />
          </div>

            <p>A Web developer from Southern Alberta Institute of Technology finishing with [GPA 3.96] score.
              <br/>A graduate of a four-year course (Bachelor of Arts, Major in Computer Science) from the Philippines.
            </p>

            <p>Currently, I am doing freelancing and former SAIT web development student mentor.</p>
            <p>Mostly, I am working using javascript framework, like react.js, vue.js
              <br/>also node.js express and some nodejs libraries for the backend.
            </p>

            <p>I have personal experience building full-stack application using MERN stack with best practices in mind.</p>
            <p>I will continue to explore and learn as technolory evolve.</p>

            <p>Thank you for your interest and for visiting my page!
              <br/> 
              <br/> 
              Please let me know how I can help!  
            </p> 

         </div>   

         <div className='btn-fw button'><Link to="contact" smooth={true} duration={1000}>Send Me Direct Message</Link></div>
      </div>
      
      </article>
    </section>
  )
}

export default About
