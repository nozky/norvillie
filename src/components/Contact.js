import React from 'react'
import '../css/contact.css'

const Contact = () => {
  return (
    <section className='section contact section-bg' id='contact'>
    
        <h2>Get in touch</h2>

        <form className='contact-form' action="https://formspree.io/f/meqvgdzj" method='POST'>
          <div>
            <input  type="text" id='name' name='name' placeholder='Name'/>
            <input  type="text" id='subject' name='subject' placeholder='Subject'/>
          </div>
          <div>
            <input type="email" id='name' name='_replyto' placeholder='Email' />
          </div>
          <div>
            <input type="text" id='message' name='message' placeholder='Message'/>
          </div>
          <div>
              <button className='btn-fw' type='submit' >Send Message</button>
          </div>
        </form>
      
    </section>
  )
}

export default Contact
