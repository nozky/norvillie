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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolorum mollitia rem eligendi culpa laudantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolorum mollitia rem eligendi culpa laudantium.</p>
         <div className='btn btn-fw'>Message me</div>
      </div>
      
      </article>
    </section>
  )
}

export default About
