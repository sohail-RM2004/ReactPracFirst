import React from 'react';
import speakerimage from "../imagess/male-business-speaker-giving-talk-business-conference-event_148840-66621.jpg"

function About() {
  return (
    <div>
  <h1>Learn more About us here.</h1>;
  <div className="card" style={{width: '18rem'}}>
   <img src= {speakerimage} className="card-img-top" alt= 'powerful man' />
   <div className="card-body">
    <h5 className="card-title">BOOK AN ANCHOR.</h5>
   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="/" className="btn btn-primary">Go somewhere</a>
   </div>
 </div>
  </div>
)}

export default About;









// import React, {useState} from 'react'

// export default function About() {

// const [myStyle, setmyStyle] = useState({
//     color:'black',
//     backgroundColor:'white'
// })

// const [btnText, setBtntext]= useState ("enable dark mode")

// const toggleStyle = () => {


// if(myStyle.color==='black'){
//     setmyStyle({
//         color:'white',
//         backgroundColor:'black'
//     })
//     setBtntext('Enable Light Mode')
// }
// else {
//     setmyStyle ({
//         color:'black',
//         backgroundColor:'white'
//     })
//     setBtntext("Enable Dark Mode")
// }
// }
// const [stateA, stateB] = useState('randomState');

// const updateState = () => {
//   // Update the state using the setter function
//   stateB('updatedState');
// };

//   return (
//     <div className="container" style={myStyle}>
//         <h1 className='my-3'>ABOUT US</h1>  {/*here youve made a small margin like css to create some distance. noting it down. for you to know*/}
//       <div className="accordion" id="accordionExample" style={myStyle}>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="/collapseOne" aria-expanded="true" aria-controls="collapseOne">
//         Accordion Item #1
//       </button>
//     </h2>
//     <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//       <div className="accordion-body">
//         <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="/collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//         Accordion Item #2
//       </button>
//     </h2>
//     <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//       <div className="accordion-body">
//         <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="/collapseThree" aria-expanded="false" aria-controls="collapseThree">
//         Accordion Item #3
//       </button>
//     </h2>
//     <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//       <div className="accordion-body">
//         <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>

// </div>
// <div className='container my-3'>
// <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
//     </div>


//     <div>
//         <h1>THIS IS FOR UNDERSTAMDING</h1>
//       <p>Current State: {stateA}</p>
//       <button onClick={updateState}>Update State</button>
//     </div>
//     </div>

    
//   )
// }
