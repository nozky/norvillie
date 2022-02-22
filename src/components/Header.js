import React,{useState, useLayoutEffect, useEffect} from 'react'
import '../css/header.css'
import {Link} from 'react-scroll'


const Header = ({links}) => {
  
  const [scroll, setScroll] = useState(1)
  const [ headerVisibility, seHeaderVisibility ] = useState(false)

  useLayoutEffect(()=>{
    document.body.onscroll = (e)=>{
      let scrollPosition = window.scrollY
      setScroll(scrollPosition)
    }
  })
  
  useEffect(()=>{
    if(scroll > 100) {
      seHeaderVisibility(false)
    }else{
      seHeaderVisibility(true)
    }  
  },[scroll])


  return (
    <header className={headerVisibility ? "header-active " : "header-active fade-out"}>
          <h2 className='logo'>N</h2>
        <nav>
          <ul>
            {links.map((link,index)=>{
              return(
                <li key={index}><Link to={link.toLowerCase()} smooth={true} duration={1000}>{link}</Link></li>
              )
            })}
          </ul>
        </nav>
      </header>

  )
}

export default Header
