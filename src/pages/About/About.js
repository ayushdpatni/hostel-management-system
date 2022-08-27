import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className="container">
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

    </div>
  )
}
export default About;