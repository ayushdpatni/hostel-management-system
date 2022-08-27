import React from 'react'
import StudentComponent from './StudentComponent.js';
import './Contact.css';
import { GrLinkedin, GrInstagram, GrFacebook, GrGithub, GrTwitter } from "react-icons/gr";
const Contact = () => {
  return (
      <div className="container-contact">
        <br />
        <h2 className='head-text-center'>Complaint Form</h2>
            <div>
                <StudentComponent/>
            </div>
            <br></br>
            <br></br>
            <br></br>
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
export default Contact;

