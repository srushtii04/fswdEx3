import React,{useState} from 'react';

export default function Text(props){

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        let upText = text.toUpperCase();
        setText(upText);
    }

    const handleLowClick = () =>{
        let lowText = text.toLowerCase();
        setText(lowText);
    }

    const handleClearClick = () =>{
        let cText ="";
        setText(cText);
    }

    const[text,setText] = useState("");

    return(
        <div className="text">
            <div className="enterText">
                <h2>{props.heading}</h2>
                <textarea value={text} placeholder="Enter text..." rows="10" cols="60"
                          onChange={handleOnChange}></textarea>
            </div>
            <div className="btns">
                <button onClick={handleUpClick}>Convert To Upper Case</button>
                <button onClick={handleLowClick}>Convert To Lower Case</button>
                <button onClick={handleClearClick}>Clear</button>
            </div>
            <div className="summary">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length}words and {text.length}character</p>
            </div>
        </div>
    );
}