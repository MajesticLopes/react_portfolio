import './header.css'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Michael Lopes</h3>
        <p>
        Sports enthusiast and passionate about IT and sales, I am a junior full-stack developer with a solid background in management.
        Having recently completed an intensive bootcamp at Le Wagon Montreal and having completed several team projects, I present myself as an adaptable, curious and very motivated person.
        In short, feel comfortable asking me any questions regarding my professional background.
        </p>
        <div className='header__cta'>
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn white'>My Work</a>
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
