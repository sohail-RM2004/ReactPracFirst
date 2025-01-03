import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f4f4f4' }}>
      <nav> Anchire.com</nav>
      <Link to="/">Home</Link>
      <Link to="/book">Book an Anchor</Link>
      <Link to="/about">About Us</Link>
    </nav>
  );
}

export default Navbar;

















// import React from 'react'
// import { Link } from 'react-router-dom'
// // import PropTypes from 'prop-types'

// export default function Navbar(props) {
//   return (
//     <div>
//       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">AncHire.com</Link>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/Book">Book an Anchor</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/About">About Us</a>
//         </li>

        
//       </ul>
//       <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//   <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//   <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
// </div>
//     </div>
//   </div>


// </nav>
//     </div>
//   )
// }
