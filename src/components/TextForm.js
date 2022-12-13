import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpclick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  
  }
  const handleclearclick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
  
  }
  const handleDounclick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  
  }
  
  const handleOnchange = (event)=>{
    console.log("on change");
    setText(event.target.value)
  }

  const handleCopy = ()=>{
    var text =  document.getElementById('mytext');
    text.select();
    navigator.clipboard.writeText(text.value);
  }


  const [text, setText] = useState(' ');
  //text = "new Text"; // worng way to change the state 
  //setText("new text") // right way to change the state 
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-4">
          <textarea className="form-control" id="mytext" value={text} onChange={handleOnchange} rows="8"></textarea>
        </div>
          <button className="btn btn-primary mx-4" onClick={handleUpclick} >convert to uppercase</button>

          <button className="btn btn-primary mx-4" onClick={handleDounclick} >convert to lowercase</button>

          <button className="btn btn-primary mx-4" onClick={handleclearclick} >clear the textarea</button>
          <button className="btn btn-primary" onClick={handleCopy} >copy text</button>
    </div>

    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} charecters</p>
      <p>{0.008 * text.split(" ").length} Reding Time</p>
      <h2>Preview</h2>
      <p className='mx-3'>{text}</p>

    </div>


    </>
  )
}
