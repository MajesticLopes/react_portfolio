import './header.css'
import HeaderImage from '../../assets/header.jpg'

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
        Currently, I am looking not only for a programming position, but also for a large team with which I could grow professionally. I will be delighted to be able to learn and contribute to your team by bringing my qualities.
        In short, feel comfortable asking me any questions regarding my professional background.
        </p>
        <div className='header__cta'>
          <a href="#contact">Let's Talk</a>
          <a href="#portfolio">My Work</a>
        </div>
      </div>
    </header>
  )
}

export default Header
