import React , {useState} from 'react'





export default function TextForm(props) {

    

    const handleUpClick = () => {

        let newText = text.toUpperCase();

        setText(newText);

        props.showAlert("Converted to UpperCase !!" , "success");
    }

    const handleLoClick = () => {

        let newText = text.toLowerCase();

        setText(newText);

        props.showAlert("Converted to LowerCase !!" , "success");
    }

    const handleClClick = () => {

        let newText = '';

        setText(newText);

        props.showAlert("Text Cleared" , "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Starts speaking...." , "success");
      }

    const handleOnChange= (event) => {
        setText(event.target.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed" , "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard" , "success");  
    }





    const [text , setText] = useState('');
  return (

    <>
    <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClClick} >Clear</button>
      <button className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1 my-1 " onClick={handleCopy} >Copy Text</button>

      <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>{text.split(/\s+/).filter((ele)=>{return ele.length !== 0}).length} words and {text.length} characters</p>
          <p>It takes your <b>{0.008 * text.split(" ").filter((ele)=>{return ele.length !== 0}).length} minutes</b> to read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Please write something above !!!"}</p>
      </div>
   

    </> 

     
  )
}
