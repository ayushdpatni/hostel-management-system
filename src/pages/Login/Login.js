import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Login.css'

SwiperCore.use([EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

const Login = () => {
  return (
    <div>
      <div>
        <br />
        <button type="submit" style={{alignSelf: "center", padding: "20px", marginLeft: "650px", marginBottom: "26px"}}>Login form goes here...</button>
        <br />
        <h3 className="text-center" id="#achievements">Our Hostel Images</h3>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={1}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          loop: true,
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Login;