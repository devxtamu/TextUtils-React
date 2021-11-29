import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState(" Enter your text here");
    const handleUpperCase = () =>{
        console.log("The button was clicked")
        setText(text.toUpperCase())
        props.showAlert("The text has been converted into Upper Case","success")
    }
    const handleLowerCase = () =>{
        console.log("The button was clicked")
        setText(text.toLowerCase())
    }
    const handleOnChange = (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }
    const handleClearText = () =>{
        setText("")
    }
        return (
            <>
        <div className={`container text-${props.mode=== "light"?"black":"white"}`}>
            <h1>{props.heading}</h1>
            <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Enter your text</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode==="light"?'white':'#17252b', color:props.mode==="dark"?'white':'black'}} value={text} onChange={handleOnChange}></textarea>
  </div>
  <button className="btn btn-primary mx-2 my-2" style={{backgroundColor:"green"}} onClick={handleUpperCase}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>

        </div>
        <div className={`container my-2 text-${props.mode==='light'?'black':'white'}`}>
            <h1>Your Text Summary</h1>
            <p> {text.startsWith("")? text.split(" ").length-1: text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length===0?"Enter your text to preview":text}</p>
        </div>
        </>
    )
}
