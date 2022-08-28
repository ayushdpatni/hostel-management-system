import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Login.css'
import { GrLinkedin, GrInstagram, GrFacebook, GrGithub, GrTwitter } from "react-icons/gr";

SwiperCore.use([EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [
  "https://images.unsplash.com/photo-1611641613359-f698d54566dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615557296678-6d259fb9f979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eSUyMGJ1aWxkaW5nfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1659583294932-4bcb9a9ce0c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  "https://images.unsplash.com/photo-1659583294932-4bcb9a9ce0c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  "https://images.unsplash.com/photo-1659583294932-4bcb9a9ce0c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  "https://images.unsplash.com/photo-1659583294932-4bcb9a9ce0c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  "https://images.unsplash.com/photo-1659583294932-4bcb9a9ce0c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  "https://images.unsplash.com/photo-1659583294932-4bcb9a9ce0c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  "https://images.unsplash.com/photo-1659583294932-4bcb9a9ce0c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
];

const Login = () => {
  return (
    <div>
      <div className="login-button">
        <br />
        <button type="submit" className="login-button" style={{alignSelf: "center", padding: "20px", marginLeft: "650px", marginBottom: "26px"}}>Login form goes here...</button>
        <br />
      </div>
        <h3 className="login-text-center" id="#achievements">Our Hostel Images</h3>
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
          slideShadows: false,
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
      <br/>
      <p className="about-text-content">
      University of Pune provides hostel facility to both girls and boys. The hostel facility is granted to the students of the University strictly on the basis of merit. The number of seats for each department depends on the department size.  
      </p>
      <br/>
      <br/>
      <br/>
      {/* ---------------footer-------------- */}
    <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">
                          XYZ
                        </h1>
                        <span className="footer__subtitle">
                            Group of Hostels.
                        </span>
                        < br/>
                        < br/>
                    </div>
                    <div className="footer__socials">
                            <a href="https://www.facebook.com/ayushpatni" target="_blank" className="footer__social" rel="noreferrer">
                              <GrFacebook />
                            </a>
                            <a href="https://www.instagram.com/ayushpatni_22/" target="_blank" className="footer__social" rel="noreferrer">
                              <GrInstagram />
                            </a>
                            <a href="https://www.twitter.com/ayushpatni_22" target="_blank" className="footer__social" rel="noreferrer">
                              <GrTwitter />
                            </a>
                            <a href="https://www.github.com/ayushdpatni" target="_blank" className="footer__social" rel="noreferrer">
                              <GrGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/ayushpatni22/" target="_blank" rel="noreferrer"className="footer__social">
                            <GrLinkedin />
                            </a>
                            
                    </div>
                </div>
                <p className="footer__copy">&#169; XYZ Hostels. All right reserved.</p>
                <script src="https://kit.fontawesome.com/9620e50583.js" crossorigin="anonymous"></script>
            </div>
        </footer>
    
    </div>
  );
};

export default Login;