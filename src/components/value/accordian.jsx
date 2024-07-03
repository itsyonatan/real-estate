import { useState } from "react"
import data from "../../utils/accordion"
import "./accordian.css"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion"

export default function Accordian() {
  const [selected, setSelected] = useState(0);

  const handleSelection = (currentId)=>{
    setSelected(currentId);
  }

  return(
    <div className="accordian">
      <div className="accordian-content">
        {data.map((item, index) => (
          <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}          
          className={selected === index ? "accordian-item active" : "accordian-item"} key={index} onClick={()=> handleSelection(index)}>
            <div className="accordian-title flexBetween">
              <span className="logo">{item.icon}</span>
              <span className="title primaryText">{item.heading}</span>
              <span className="plus">
                <MdOutlineArrowDropDown size={20}/>
              </span>
            </div>
            {selected === index && (<div className="accordian-detail">
              <div className="detail secondaryText">{item.detail}</div>
            </div>)}
          </motion.div>
        ))}
      </div>
    </div>
  )
}