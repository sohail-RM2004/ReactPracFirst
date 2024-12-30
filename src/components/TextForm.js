import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
      props.showAlert("Converted to uppercase", "success");
    
  };


 const changeColorBlue = () => {
  let textBox = document.getElementById('myBox'); // Get the DOM element
  textBox.style.color = 'blue'; // Change the text color to blue
  props.showAlert("Changed text color to blue", "success")
};


const handlelower = () => {
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("converted to lower case", "success")
}

       const handleOnChange = (event)=> {
        console.log("on change");
        setText(event.target.value);
        
       }



const [text, setText] = useState("Enter Text Here: ")

  return (

    <div className='container'>
      <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows='8'></textarea>

      </div>
      <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>

      <button className='btn btn-primary mx-2' onClick={changeColorBlue}>Change colour to BLUE</button>

      <button className='btn btn-primary mx-2' onClick={handlelower}>Convert to lowercase</button>
    </div>
  );
}

