import {AiOutlineInstagram} from 'react-icons/ai'
import { FaLinkedin } from "react-icons/fa"
import {AiFillGithub} from 'react-icons/ai'
import { FaFacebook } from "react-icons/fa"

export const links = [
  {id: 1, link: '#', title: 'Home'},
  {id: 2, link: '#about', title: 'About'},
  {id: 3, link: '#services', title: 'Services'},
  {id: 4, link: '#portfolio', title: 'Portfolio'},
  {id: 5, link: '#contact', title: 'Contact'}
]

export const socials = [
  {id: 1, link: 'https://www.instagram.com/majesticlopes/', icon: <AiOutlineInstagram/>},
  {id: 2, link: 'https://www.linkedin.com/in/michael-lopes-marinho-7a8874182/', icon:<FaLinkedin/>},
  {id: 3, link: 'https://m.facebook.com/maicon.lopes.374?ref=bookmarks', icon:<FaFacebook/>},
  {id: 4, link: 'https://github.com/MajesticLopes', icon:<AiFillGithub/>}
]
