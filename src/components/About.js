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
        <h2>My Name is <span>Norvillie</span></h2>
        <h4>Full Stack Web Developer</h4>
        
         <p>A Web developer from Southern Alberta Institute of Technology and finish with [GPA 3.96] And a graduate of a four-year course (Bachelor of Arts, Major in Computer Science) from the Philippines</p>
         <p>Currently, I am working with NextGen Technology and doing freelance work at the same time.</p>
         <p>I am open to learn anything and i am always excited to learn new things. I think this is my best asset, i am always motivated when learning new stuff.</p>
         <p>Send me a quick message for any inquires. I love to hear anything from you.</p>
         <p>Thank you</p>   
         <div className='btn-fw button'><a href="mailto:nozkie@gmail.com?subject=From your porfolio">Send Me Direct Message</a></div>
      </div>
      
      </article>
    </section>
  )
}

export default About
