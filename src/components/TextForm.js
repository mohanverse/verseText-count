import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpclick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
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


  const [text, setText] = useState('Enter text here');
  //text = "new Text"; // worng way to change the state 
  //setText("new text") // right way to change the state 
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="mytext" value={text} onChange={handleOnchange} rows="8"></textarea>
        </div>
        <div>
          <button className="btn btn-primary " onClick={handleUpclick} >convert to uppercase</button>
          
          <button className="btn btn-primary" onClick={handleDounclick} >convert to lowercase</button>
        </div>
    </div>
  )
}
