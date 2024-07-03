import Accordian from "./accordian"
import "./value.css"
import { motion } from "framer-motion";

export default function Value() {

  return (
    <div className="value container paddings">
      <div className="value-content flexColCenter">
        <div className="left-value-content">
          <img src="\value.png" alt="" />
        </div>
        <div className="right-value-content flexColStart">
          <div className="title flexColStart">
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}                  
            className="orangeText">Our Value</motion.span>
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}                  
            className="primaryText">Value We Give to You</motion.span>
            <div className="secondaryText">
              <p>We always ready to help by providing the best services for you.</p>
              <p>We beleive a good place to live can make your life better</p>
            </div>
          </div>
          <Accordian />
        </div>
      </div>
    </div>
  )
}
