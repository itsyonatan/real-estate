
import { HiChat, HiChatAlt2, HiPhone, HiVideoCamera } from "react-icons/hi"
import "./contact.css"
import { motion } from "framer-motion"

export default function Contact() {

  return (
    <div className="contact container paddings">
      <div className="contact-content flexColCenter">
        <div className="left-content">
          <div className="contact-header flexColStart">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="orangeText">Our Contact</motion.span>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="primaryText">Easy to contact us</motion.span>
            <p className="secondaryText">We always ready to help by providing the best services for you. We beleive a good place to live can make your life better</p>
          </div>
          <div className="contact-items">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="contact-item">
              <div className="contact-info">
                <div className="contact-icon">
                  <HiPhone size={23} style={{ fill: "blue" }} />
                </div>
                <div className="contact-no">
                  <p>Call</p>
                  <p>021 123 145 15</p>
                </div>
              </div>
              <button className="call-btn">Call now</button>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="contact-item">
              <div className="contact-info">
                <div className="contact-icon">
                  <HiChat size={26} style={{ fill: "blue" }} />
                </div>
                <div className="contact-no">
                  <p>Chat</p>
                  <p>021 123 145 15</p>
                </div>
              </div>
              <button className="call-btn">Call now</button>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="contact-item">
              <div className="contact-info">
                <div className="contact-icon">
                  <HiVideoCamera size={26} style={{ fill: "blue" }} />
                </div>
                <div className="contact-no">
                  <p>Video Call</p>
                  <p>021 123 145 15</p>
                </div>
              </div>
              <button className="call-btn">Call now</button>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="contact-item">
              <div className="contact-info">
                <div className="contact-icon">
                  <HiChatAlt2 size={26} style={{ fill: "blue" }} />
                </div>
                <div className="contact-no">
                  <p>Message</p>
                  <p>021 123 145 15</p>
                </div>
              </div>
              <button className="call-btn">Call now</button>
            </motion.div>
          </div>
        </div>
        <div className="right-content">
          <img src="\contact.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}