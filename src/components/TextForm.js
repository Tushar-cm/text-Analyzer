import React, { useState } from 'react';



export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
        console.log("Lowecase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearText = () => {
      console.log("Text was cleared");
      setText('');
    }
    const handleCopyText = () => {
      console.log("Text was copied");
      // Copy text to the clipboard
      navigator.clipboard.writeText(text);
    };
    const handleRemoveExtraSpaces = () => {
      console.log("Extra spaces removed");
      let newText = text.replace(/\s+/g, ' '); // Replace multiple spaces with a single space
      setText(newText);
    };
    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    
    
  return (
    <>
    <div className='container'>
       <h1>{props.heading}</h1>
        <div className="mb-2">
        <label htmlFor="TextForm" className="form-label"></label>
        <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="TextForm" rows="10"></textarea>
            </div>
 
          
            <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
