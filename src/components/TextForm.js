import React,{useState} from 'react'
import copy from "copy-to-clipboard";  
export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log(text)
        let newText = text.toUpperCase();
        setText(newText)
         props.showAlert('Converted to upperCase','success')
      
    }
    const handleLowClick = ()=>{
    //    console.log(text)
    let newText = text.toLowerCase();
         setText(newText)
          props.showAlert('Convert to the lowerCase','success')
    }
    const handleClear = ()=>{
    //    console.log(text)
    let newText = '';
         setText(newText)
          props.showAlert('Clear','success')
    }
    const handleCopy = (event)=>{
    //    console.log(text)
  copy(text);
    let newText = 'Copied !';
         setCopyText(newText)
         props.showAlert('Copied','success')
    
    }
    const handleOnChange =(event)=>{
        // console.log("lol")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter the text here'); 
    const [copyText,setCopyText] = useState('Copy Text')
  return (
    <>
    <div className="container my-2">
        <div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} style={{
    backgroundColor:props.mode==='light'?'unset':'#212529' , 
    color:props.mode ==='light'?'unset':'white'
}} onChange={handleOnChange} id="text-area" rows="10"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert the text in upperCase</button>
<button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleLowClick} >Convert the text in lowerCase</button>
<button disabled={text.length===0} className="btn btn-success mx-2 my-2 " onClick={handleCopy}>{copyText}</button>
<button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClear}>Clear Text</button>
</div>
<div className="container">
<h3>Text Summary</h3>
<p>{text.split(" ").filter(i => i).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length } minutes to read the text</p>
 <h3>Text Preview</h3>
 <p>{text.length>0?text:'Nothing to Preview !'}</p>

</div>

</>
  );
}
