import React from 'react'
import '../css/about.css'

const About = () => {
  return (
    <section className='section about section-bg'>
      <article>

      <div className='about-img'>
          <img src="https://raw.githubusercontent.com/nozky/assets/master/picture/Norvillie-profilePix.jpg" alt="Norvillie Villaruel" />
      </div>

      <div className='about-text'>
        <h2>I am <span>Norvillie</span></h2>
        <h4>Web Developer</h4>
        {/* <p>A Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes. </p>
        <p>I will help you to design, install, test, and maintain web systems. Able to effectively self-manage during independent projects, as well as collaboration in a team setting.</p>
          */}
         <p>A practicum from Southern Alberta Institute of Technology</p>
         <p>And a graduate of a four-year course (Bachelor of Arts, Major in Computer Science) from the Philippines</p>

         <div className='btn-fw button'><a href="mailto:nozkie@gmail.com?subject=From your porfolio">Send Me Direct Message</a></div>
      </div>
      
      </article>
    </section>
  )
}

export default About
