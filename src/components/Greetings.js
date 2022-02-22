import React from 'react'
import '../css/greetings.css'

const Greetings = ({isVisible, setIsVisible}) => {

  return (
    isVisible &&  <div className='greetings' onClick={()=> setIsVisible( false )}>
      <h2>Thank you very much!</h2>
      <h4>Your are wonderful person.</h4>
      <p>Talk to you soon.</p>
    </div>
  )
  
}

export default Greetings
