import React from 'react'
import '../css/education.css'

const Education = () => {
  return (
    <section className= 'section education section-bg' id='education'>
      
      <h2 className='title'>Education</h2>
      
      <div className='education-wrapper'>

        <div className="degree">
          <h3>Web Developer</h3>
          <h5>2021</h5>
          <p>Southern Alberta Institute of Technology<br/>Calgary</p>
        </div>
        
        <div className="degree">
          <h3>React.js</h3>
          <h5>2021</h5>
          <p>FreeCodeCamp.org and Youtube Academy</p>
        </div>

        <div className="degree">
          <h3>Vue.js</h3>
          <h5>2021</h5>
          <p>FreeCodeCamp.org and Youtube Academy</p>
        </div>

        <div className="degree">
          <h3>Bachelor or Arts, Major in Computer Science</h3>
          <h5>2002</h5>
          <p>Philippines</p>
        </div>
      
      </div>
    </section>
  )
}

export default Education
