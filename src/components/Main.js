import React from 'react'
import '../css/main.css'
import {Link} from 'react-scroll'
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai'


const Main = () => {
  return (
  <main className='main' id='home'>
      <div className='left-side'>
        
        <p>Welcome to my page</p>
        <h1 className='title'>I'm a Web Developer</h1>
        
        <div className='icons'>
          <div className='icons-item'><a href="https://www.linkedin.com/in/norvillie-villaruel/" target='_blank' rel="noreferrer" ><AiOutlineLinkedin/></a></div>  
          <div className='icons-item'><a href="https://github.com/nozky" target='_blank' rel="noreferrer" ><AiOutlineGithub/></a></div>  
          <div className='icons-item'><a href="mailto:norvillie.villaruel@gmail.com?subject=Mail from your portfolio"><AiOutlineMail/></a></div>  
        </div>
      
        <div className='btn-cta'>
          <Link to="works" smooth={true}><div className='btn-fw'>View Work</div></Link>
          <div className='btn-fw'>Hire me</div>
        </div>
      </div>
      
      <div className='right-side'>

      </div>
  </main>
  )
}

export default Main
