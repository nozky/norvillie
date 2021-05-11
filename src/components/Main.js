import React from 'react'
import '../css/main.css'
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai'

const Main = () => {
  return (
  <main className='main'>
      <div className='left-side'>
        
        <p>Welcome to my page</p>
        <h1 className='title'>I'm a Web Developer</h1>
        
        <div className='icons'>
          <div><AiOutlineLinkedin/></div>  
          <div><AiOutlineGithub/></div>  
          <div><AiOutlineMail/></div>  
        </div>
      
        <div className='btn-cta'>
          <div className='btn-fw'>View Work</div>
          <div className='btn-fw'>Hire me</div>
        </div>
      </div>
      
      <div className='right-side'>

      </div>
  </main>
  )
}

export default Main
