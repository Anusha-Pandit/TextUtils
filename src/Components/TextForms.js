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
    var text= document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
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
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleSpaceClick}>Remove extra space</button>

        </div>
        <div className="container" style={{color:props.mode === 'light' ? 'dark' : 'white'}}>
            <h3>Your text summmary</h3>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} minutes required to read this text.</p>
        </div>
        </>
    )
}