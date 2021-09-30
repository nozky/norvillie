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

            <p>A Web developer from Southern Alberta Institute of Technology with [GPA 3.96] score.</p>
            <p>A graduate of a four-year course (Bachelor of Arts, Major in Computer Science) from the Philippines.</p>
            <p>Currently, I am working with NextGen Technology (Calgary branch), a Freelancer and SAIT web development student mentor.
              <br/> I am that person who always want to know how things work and tweak if i could make it even more efficient.
            </p>
            <p>People, Employer, Agents, Friends! I love to hear anything from you. Send me a quick message for any questions.</p>
            <p>Thank you for visiting my page.</p> 
         </div>   

         <div className='btn-fw button'><Link to="contact" smooth={true} duration={1000}>Send Me Direct Message</Link></div>
      </div>
      
      </article>
    </section>
  )
}

export default About
