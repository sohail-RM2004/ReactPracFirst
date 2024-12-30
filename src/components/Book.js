// import React from 'react'

// export default function Book() {
//   return (
// <div className="card" style={{width: '18rem'}}>
//   <img src="D:\HP\ReactPrac\reactpracc\male-business-speaker-giving-talk-business-conference-event_148840-66621.jpg" className="card-img-top" />
//   <div className="card-body">
//     <h5 className="card-title">BOOK AN ANCHOR.</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="/" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//   )
// }


import React, {useState} from 'react';
import BookingForm from './BookingForm';


function Book() {

  const [firststate, updatedstate]=useState(false)
  const renderform = () => {
    updatedstate(true)
  }
  return (
    <div className='container'>
     
  <h1>Get in touch with us!</h1>
  <button onClick={renderform}>Book</button>
  {firststate && <BookingForm/>}
  
  </div>
)}

export default Book;


