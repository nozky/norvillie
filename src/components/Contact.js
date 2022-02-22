import React,{ useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import '../css/contact.css'
import Greetings from './Greetings'

const Contact = () => {
  const[ isVisible, setIsVisible ] = useState(false)
  const [ state, handleSubmit ] = useForm("meqvgdzj")

  useEffect(()=>{
    if( state.succeeded){
      setIsVisible( true )
    }
  },[state])  
 
  return (
    <section className='section contact section-bg' id='contact'>
    
        <h2>Get in touch</h2>

        <form className='contact-form' onSubmit={handleSubmit}>
       
          <div>
            <input  type="text" id='name' name='name' placeholder='Name'/>
            <ValidationError field="name" prefix="Name" errors={state.errors} />

            <input  type="text" id='subject' name='subject' placeholder='Subject' />
            <ValidationError field="subject" prefix="Subject"  errors={state.errors} />
          </div>
          
          <div>
            <input type="email" id='name' name='email' placeholder='Email' />
            <ValidationError field="email" prefix="Email" errors={state.errors} />
          </div>
          
          <div>
            <textarea rows='6'  id='message' name='message' placeholder='Message'/>
            <ValidationError field="message" prefix="Message" errors={state.errors} />
          </div>
          
          <div>
              <button className='btn-fw' type='submit' disabled={state.submitting}>Send Message</button>
          </div>
       
        </form>
          <Greetings isVisible={isVisible} setIsVisible={setIsVisible}/>
      
    </section>
  )
}

export default Contact
