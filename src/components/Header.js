import React,{useState} from 'react'
import '../css/header.css'

const Header = () => {

const [scroll, setScroll] = useState(1)

document.addEventListener('scroll',(e)=>{
  let scrollPosition = window.scrollY
  setScroll((prev)=> prev = scrollPosition)
})

  let headerVisibility = 'header-active'
  if(scroll > 100){
    headerVisibility ='header-active fade-out'
  }

  return (
    <header className={headerVisibility}>
          <h2 className='logo' id='logo'>N</h2>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

  )
}

export default Header
