import { pcParts } from "./data"

export default function Card() {
  return (
    <div className="card-container">{
        pcParts.map(items => (
          <div className="card" key={items.id}>
            <img className="card-img" src={items.image} alt={items.title} />
            <h2>{items.title}</h2>
            <p>{items.description}</p>
          </div>
        ))
      }</div>
  )
}
