import { useState } from "react"
import './nav.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  const [toggleOn, setToggleOn] = useState(false);

  const Menu = () => {
    return (
      <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/properties">Residencies</Link></li>
        <li><Link to="/property">Add Residency</Link></li>
        <li><a href="emailto:yonatanadera@gmail.com">contact</a></li>
      </>
    )
  }
  return (
    <div className="nav">
      <div className="nav-content container">
        <div className="logo">
          <Link to="/"><img src="\logo.png" alt="logo" className="logo-image" /></Link>
        </div>
        <div className="row-menu-container">
          <ul className="flexCenter">
            <Menu />
          </ul>
        </div>
        <div className="navbar-menu">
          {toggleOn ?
            <button className="toggle-btn" onClick={() => setToggleOn(false)} ><FaTimes size={26} /></button>
            :
            <button className="toggle-btn" onClick={() => setToggleOn(true)}><FaBars size={26} /></button>

          }
          {toggleOn && (<div className={toggleOn ? "toggle-on-conatainer blurBg" : "toggle-on-conatainer"}>
            <div className="column-menu-container">
            <ul className="flexColCenter">
              <Menu />
            </ul>
          </div>
          </div>)
          }
        </div>
      </div>

    </div>
  )
}      