import React from 'react'
import '../css/about.css'
import {Link} from 'react-scroll'

const About = () => {
  return (
    <section className='section about section-bg'>
      <article>

      

      <div className='about-text'>
        <h2>My Name is <span>Norvillie</span></h2>
        <h4>Full Stack Web Developer</h4>
        
         <div className="float">
         
          <div className='about-img'>
            <img src="https://raw.githubusercontent.com/nozky/assets/master/picture/Norvillie-profilePix.jpg" alt="Norvillie Villaruel" />
          </div>

            <p>A Web developer from Southern Alberta Institute of Technology with [GPA 3.96] score.
              <br/>A graduate of a four-year course (Bachelor of Arts, Major in Computer Science) from the philippines.
            </p>
            <p>Currently I am doing freelancing and SAIT web development student mentor.
              <br/> I am that person who always curious on how things work and tweak if i could make it even more efficient.
            </p>
            <p>Mostly i am working using javascript framework, like react.js, vue.js, electron.js. etc...
              <br/>also node.js express and some nodejs libraries for the backend.
            </p>

            <p>I have personal experience building full-stack application using MERN stack using best practices gather around the web.</p>

            <p>Thank you for your interest and for visiting my page.
              <br/> Please let me know how i can help!  
            </p> 

         </div>   

         <div className='btn-fw button'><Link to="contact" smooth={true} duration={1000}>Send Me Direct Message</Link></div>
      </div>
      
      </article>
    </section>
  )
}

export default About
