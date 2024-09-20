import React,{useState} from "react";

export default function TextFonts(props){
const handleUpClick =() => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","Success");
}
const handleLowClick =() => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","Success");
}
const handleClearClick =() => {
    //console.log("UpperCase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Cleared textArea","Success");
}
const handleCopyClick =() =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","Success");
}
const handleSpaceClick =() =>{
   let newText= text.split(/[ ] +/);
   setText(newText.join(" "));
   props.showAlert("Cleared extra space","Success");
}

const handleChange =(event) => {
    //console.log("handle the change");
    setText(event.target.value);
}

const [text,setText]=useState('');

    return(
        <>
        <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}} id="textArea" rows={3}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaceClick}>Remove extra space</button>

        </div>
        <div className="container" style={{color:props.mode === 'light' ? 'dark' : 'white'}}>
            <h3>Your text summmary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes required to read this text.</p>
        </div>
        </>
    )
}