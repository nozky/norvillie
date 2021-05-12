import {Link} from 'react-scroll'
import '../css/footer.css'

const Footer = ({links}) => {


  return (
    <footer className='section-bg' id='footer'>
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
      <p>norvillie.villaruel@gmail.com</p>
    </footer>
  )
}

export default Footer
