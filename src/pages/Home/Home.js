import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../Login/Login.css"
import GoogleMapReact from 'google-map-react';
import './Home.css'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

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

const Home = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
<div>
      <div>
      <header className="head-line">.</header>
        <h3 className="text-center" id="achievements">Our Hostel Achievements</h3>
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




      <br></br>
      <div>
        <br></br>
        <h3 className="text-center">Our Location</h3>
      </div>
    <div style={{ height: '450px', width: '100%' , alignContent:'center', paddingRight: "120px", paddingTop: "10px",paddingLeft: "120px"}}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
    <p className="hostel-location">University of Pune provides hostel facility to both girls and boys. The hostel facility is granted to the students of the University strictly on the basis of merit. The number of seats for each department depends on the department size.  </p>
    </div>
  )
}
export default Home;