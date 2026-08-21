import './Card.css'

const Card = (props) => {

  return (
    <div className="card">
      <a
        href={props.elem.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="image-container">
          <img
            src={props.elem.download_url}
            alt={props.elem.author}
          />
        </div>

        <h2>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default Card
