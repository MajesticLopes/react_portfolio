import './navbar.css'
import Logo from '../../assets/logo.jpg'
import data from './data'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='Nav__menu'>
          {
            data.map(item => <li><a href={item.link}>{item.title}</a></li> )
          }


        </ul>
        <button></button>
      </div>
    </nav>
  )
}

export default Navbar
