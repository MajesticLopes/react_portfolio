import './card.css'

const Card = ({children, className, onClick}) => {
  return (
    <article>
      <div className={`card ${className}`} onClick={onClick}>
        {children}
      </div>
    </article>
  )
}

export default Card
