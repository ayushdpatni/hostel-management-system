import React from 'react'
import StudentComponent from './StudentComponent.js';
import './Contact.css';
const Contact = () => {
  return (
      <div className="container-contact">
        <br />
        <h1 className='text-center'>Complaint Form</h1>
            <div>
                <StudentComponent/>
            </div>
    </div>
  )
}
export default Contact;

