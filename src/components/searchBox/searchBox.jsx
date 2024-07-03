import "./searchBox.css"
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

export default function SearchBox() {


  return (
    <div className="search-box flexStart">
      <HiLocationMarker size={25} className="location-logo" />
      <input type="text" name="input" className="search-input" placeholder="Search by title/city/country..." />
      <motion.button
        initial={{ x: "-16rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{ duration: 0.2, delay: 0, }}
        className="search-btn">
        Search
      </motion.button>
    </div>
  )
}