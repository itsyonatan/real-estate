import "./footer.css"

export default function Footer() {


  return (
    <div className="footer">
      <div className="footer-content flexColCenter">
        <div className="left-footer-content flexColCenter">
          <img src="\logo2.png" alt="logo" />
          <span className="secondaryText text_center">
            <p>Our vision is to make all people</p>
            <p>the best place to live for them</p>
          </span>
        </div>
        <div className="right-footer-content flexColCenter">
          <p className="primaryText">Information</p>
          <p className="secondaryText">145 New York, FL 5467, USA</p>
          <div className="footer-list">
            <ul className="flexCenter">
              <li><a href="#property">Property</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#product">Product</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  )
}