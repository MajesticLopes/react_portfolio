import './about.css'
import AboutImage from '../../assets/about.jpeg'
import CV from '../../assets/cv.pdf'
import { BsDownload } from "react-icons/bs";
import Card from '../../components/Card'
import data from './data'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img height="500" width="371" src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Having recently completed an intensive bootcamp at Le Wagon Montreal and having completed several team projects, I present myself as an adaptable, curious and very motivated person.
            In short, feel comfortable asking me any questions regarding my professional background. Check out my resume below !
          </p>
          <p>
            Hi, my name is Michael Lopes Marinho from Rio de Janeiro, brazil.
            During a period of 6 months, I was able to work in a group, create projects, practice and improve in all the basics of programming through HTML, SASS/CSS, Javascript ES6, Stimulus, React, Ruby, Ruby on Rails, Bootstrap , Git, Github, Figma and Heroku.
            Check out my resume below !
          </p>
          <a href={CV} download className='btn primary'> Download CV
          <BsDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About
