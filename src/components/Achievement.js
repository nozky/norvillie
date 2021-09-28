import React from 'react'
import '../css/achievement.css'
import cdi from '../assests/cdi.png'
import ptk from '../assests/ptk.jpg'

const Achievement = () => {
  return (
    <div className='achievement section'>
      <h1>Achievement and Awards</h1>
      
      <div className="wrapper">

        <div className="award">
          <div className="image">
            <img src={ptk} alt="award logo" />  
          </div>
          <div className="text">
            <h3>Phi Theta Kappa Honor Society </h3>
            <p>2021</p>
            <p>Phi Theta Kappa (PTK) is the largest honour society in higher education, serving 1,250 two-year colleges around the world and offering exclusive programs and benefits to its members.
            <br />Chapters of Phi Theta Kappa have been recognizing and encouraging academic excellence and leadership in North America and abroad since 1918.</p>
          </div>
        </div>

        <div className="award">
          <div className="image">
            <img src={cdi} alt="award logo" />
          </div>
          <div className="text">
            <h3>Student Excellence Award</h3>
            <p>2019</p>
            <p>This acknowledgement is awarded to hose students who demonstrate a commitments to success as a student and as a professional.</p>
          </div>
        </div>
        </div>

    </div>
  )
}

export default Achievement
