import './navbar.css'
import Logo from '../../assets/header3.jpeg'
import data from './data'
import { IoColorPaletteOutline } from "react-icons/io5";
import {useModalContext} from '../../context/modal-context'
const Navbar = () => {
  const {showModalHandler} = useModalContext();

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='Nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li> )
          }


        </ul>
        <button id='theme_icon' onClick={showModalHandler}><IoColorPaletteOutline /></button>
      </div>
    </nav>
  )
}

export default Navbar
