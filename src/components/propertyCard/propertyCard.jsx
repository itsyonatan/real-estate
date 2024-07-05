import { Link } from "react-router-dom"
import "./propertyCard.css"


export default function PropertyCard({ item }) {

  return (
    <div>
      <Link>
        <div className="properties-item flexColStart" key={item.id} >
          <img src={item.image} alt="" />
          <span className="r-price secondaryText">
            <span style={{ color: "orange" }}>$</span><span>{item.price}</span>
          </span>
          <span className="r-name primaryText">{item.title}</span>
          <span className="t-detail secondaryText">{item.description}</span>
        </div>
      </Link>
    </div>
  )
}