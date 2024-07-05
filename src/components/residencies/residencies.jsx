import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./residencies.css";
import PropertyCard from "../propertyCard/propertyCard";
//import UseFetch from "../../utils/customFetch/customFetch";
//import { PuffLoader } from "react-spinners";
import { data } from "../../data/data";
import { motion } from "framer-motion";

const Residencies = () => {

  //const { isPending, error } = UseFetch("http://localhost:8000/data");

  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
      },
      750: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 4
      }
    }
  }
  console.log(data);
  return (
    <div className="residencies paddings container">
      <div className="flexColStart r-header">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="orangeText">Best Choices</motion.span>
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="primaryText">Popular Residencies</motion.span>
      </div>
      {/*error && <span>Error while Fetching data</span>*/}
      {/*isPending && <span className="flexCenter" style={{ height: "40vh" }}>
        <PuffLoader
          height="80" width="80" radius={1} color="#4066ff" aria-label="puff-loading"
        />
      </span>*/}

      {data && <Swiper {...sliderSettings}>
        <SlideNextButton />
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            <PropertyCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>}
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};


