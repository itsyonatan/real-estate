
import Nav from "../nav/nav";
import './header.css';
import CountUp from "react-countup";
import SearchBox from "../searchBox/searchBox";
import { motion } from "framer-motion"

export default function Header() {

  return (
    <div className="header">
      <div className="bg"></div>
      <div className="nav-container">
        <Nav />
      </div>
      <div className="header-content container paddings flexColCenter">
        <motion.div
          initial={{ x: "-5rem", opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1.1 }}
          transition={{ duration: 2, type: "spring" }}
          className="right-header-content flexCenter ">
          <img src="\download.jfif" alt="headerImage" />
        </motion.div>

        <div className="left-header-content flexColStart">
          <div className="header-title">
            <h1 className="title section_title flexColStart">
              <motion.div
                initial={{ x: "-5rem", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 2, type: "spring" }}
              >Discover</motion.div>
              <motion.div
                initial={{ x: "5rem", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 2, type: "spring" }}
              >Most Suitable</motion.div>
              <motion.div
                initial={{ x: "-5rem", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 2, type: "spring" }}
              >Property</motion.div>
            </h1>
          </div>
          <div className="secondaryText" style={{ color: "rgb(199, 199, 199)" }}>
            <p>Find a variety of properties that suit you very easilty </p>
            <p>Forget all difficulties in finding a rresidence for you</p>
          </div>
          <SearchBox />
          <div className="stat flexAround">
            <div className="stat-items">
              <span>
                <CountUp className="count" start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>

              <p>Premium Product</p>
            </div>
            <div className="stat-items">
              <span>
                <CountUp className="count" start={1800} end={2000} duration={4} />
                <span>+</span>
              </span>

              <p>Happy Customer</p>
            </div>
            <div className="stat-items">
              <span>
                <CountUp className="count" end={28} duration={4} />
                <span>+</span>
              </span>

              <p>Awards Winning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

