
import './App.css'
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Book from './components/Book'
import About from './components/About'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (


<>
<Router basename="/ReactPracFirst">
<Navbar/>

      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element= {<Home />} />          
          <Route path="/book" element= {<Book />} />
          <Route path="/about" element= {<About/>} />
        </Routes>
      </div>
    </Router>
    {/* <Book/> */}


</>
  )
}


export default App;














































// import './App.css';
// import TextForm from './components/TextForm';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import { useState } from 'react';
// import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {

// const[mode, setMode] = useState('light')
// const [alert, setAlert]=useState('null')

// const showAlert= (message, type)=> {  /*first mistake, you forgot to add const while intializing this function*/
//   setAlert ({
//     msg : message, /*whatever is there in the above parameter is like a value on the right side of this object. */
//     type : type
//   })
// }


// const toggleMode = () => {
//   if(mode==='light'){
//     setMode('dark')
//     document.body.style.backgroundColor='black'
//     document.body.style.color='white'
//     showAlert("Dark mode has been enabled", "success");

//   }
//   else {
//     setMode('light')
//     document.body.style.backgroundColor='white'
//     document.body.style.color='black'
//     showAlert("Light mode has been enabled", "success");
    

//   }
// }

//   return (
// <>
// <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>

// <Alert alert= {alert} />


// <Router>
//       <div>
//         <nav>
//           <ul>
//             {/* <li>
//               <Link to="/">Home</Link>
//             </li> */}
//             <li>
//               <Link to="/About">About</Link>
//             </li>
//             <li>
//               <Link to="/TextForm">TextForm</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Routes>
//           {/* <Route path="/About"> element={<About />}</Route> */}

//           <Route exact path="/About" element={<About />} />

//           <Route exact path='/TextForm' element={<TextForm/>} />
    
//         </Routes>
//       </div>
//     </Router>

// {/* <TextForm showAlert={showAlert} id="text" heading="hello"/> */}

// {/* <About/> */}


// </>
//   )
// }

// export default App;
