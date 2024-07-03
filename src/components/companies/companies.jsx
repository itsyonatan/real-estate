import "./companies.css"


export default function Companies() {
  
  return(
    <div className="companies container paddings flexCenter">
      <div className="companies-content  grid">
        <div className="companies-item">
          <img src="\prologis.png" alt="" />
        </div>
        <div className="companies-item">
          <img src="\tower.png" alt="" />
        </div>
        <div className="companies-item">
          <img src="\equinix.png" alt="" />
        </div>
        <div className="companies-item">
          <img src="\realty.png" alt="" />
        </div>
      </div>
    </div>
  )
}