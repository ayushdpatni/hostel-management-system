import React from 'react'
import './about.css'
import { GrLinkedin, GrInstagram, GrFacebook, GrGithub, GrTwitter } from "react-icons/gr";
const About = () => {
  return (
    <div>
      <br />
      <br />
      <div className="about-text-center">
        <br />
        <h2>
        About Us
        </h2>
      </div>
      <div class="about">
        <img src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' className='about__content-img'></img>
        <p className='about__content'>Hello there! I'm Ayush.
        </p>
      </div>
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
  )
}
export default About;