import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className="container">
      <br />
      <div className="about-text-center">
        <br />
        <h2>
        About  
        </h2>
      </div>
      <div class="about">
        <img src='https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mNjVlMjY4MzVhYWYzNDRlYTI0NjMzNTQ3ZTVjNjFlZj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.PFY7qHjC8_WdFWjqs5RSqMGMd7YXZjoS2THXZFVJwYs' alt='' className='about__content-img'></img>
        <p className='about__content'>
          This is about us!
        </p>
      </div>

    </div>
  )
}
export default About;