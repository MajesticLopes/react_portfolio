import { useEffect } from 'react'
import './header.css'
import HeaderImage from '../../assets/logo.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Michael Lopes</h3>
        <p data-aos="fade-up">
        Sports enthusiast and passionate about IT and sales, I am a junior full-stack web developer with a solid background in management.
        </p>
        <div className='header__cta'>
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank"
            rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
