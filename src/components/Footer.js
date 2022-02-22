import {Link} from 'react-scroll'
import '../css/footer.css'

const Footer = ({links}) => {


  return (
    <footer className='section-bg footer' id='footer'>
      <div className="footer-nav">
        {links.map((link,index)=>{
          return(
           
              <div key={index} className='footer-nav-item'>
                <Link key={index} to={link.toLowerCase()} smooth={true} duration={1000}>| {link} |</Link>
              </div>
         
          )
        })}
      </div>
      <p>Norvillie Villaruel</p>
      <p>FullStack Web Developer</p>
      <p><a href="mailto: norvillie.villaruel@gmail.com">norvillie.villaruel@gmail.com</a></p>
    </footer>
  )
}

export default Footer
