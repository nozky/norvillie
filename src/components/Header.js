import React,{useState} from 'react'
import '../css/header.css'
import {Link} from 'react-scroll'


const Header = ({links}) => {
  
  const [scroll, setScroll] = useState(1)

 document.body.onscroll = (e)=>{
  let scrollPosition = window.scrollY
  setScroll((prev)=> prev = scrollPosition)
}

  let headerVisibility = 'header-active'
  if(scroll > 100){
    headerVisibility ='header-active fade-out'
  }

  return (
    <header className={headerVisibility}>
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
