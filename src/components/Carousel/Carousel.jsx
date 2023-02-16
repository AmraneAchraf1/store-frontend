// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import "./carousel.css"


const Carousel = () => {
  

  return (
    <>
        <Swiper
    
          spaceBetween={4}
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            
          ]}
          pagination={{ clickable: true }}
          autoplay={true}       
          navigation
          slidesPerView={1}
          loop={true}
          initialSlide={1}
          centeredSlides={true}


        >
          <SwiperSlide > 111111</SwiperSlide>
          <SwiperSlide > 222222 </SwiperSlide>
          <SwiperSlide > 3333333</SwiperSlide>
          <SwiperSlide > 4444444</SwiperSlide>

        </Swiper>

    </>
  );
};

export default Carousel;
