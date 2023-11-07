import React, { useState } from 'react'

export default function Tform(props) {
    let toUpperOn = () => {
        // console.log(text)
        let newText = text.toUpperCase();
        setText(newText)
      props.showAlert(' changed in Uppercase','success')
    }
    let toLowerOn = () => {
        // console.log(text)
        let newText = text.toLowerCase();
        setText(newText) 
      props.showAlert(' changed in Lowercase','success')
    }
    let changeText = (e) => {
        console.log('change fire')
        setText(e.target.value)
    }
    let handleCopy = ()=>{
        console.log('ready  to copy');
        let text  = document.getElementById("Mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
      props.showAlert(' copied!','success')

    }
    let handleSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
      props.showAlert(' Extra space removed','success')        
    }
    let clearArea = () =>{
        let newText = "";
        setText(newText)
      props.showAlert(' Box clear','success')
    }
    const [text, setText] = useState('')
    // text = useState('hii') wrong way to change
    // setText("hello"); correct way to change 
    return (<>
        <div id='home' className='container'>
            <h3>{props.heading}</h3>
            <div className="mb-3 mt-4">
                <textarea className="shadow form-control" id="Mybox" placeholder='Enter the text' value={text} onChange={changeText}  rows="10"></textarea>
            </div>
            <div className="container">
                <button className="btn btn-dark m-2" onClick={toUpperOn} >Convert into Uppercase</button>
                <button className="btn btn-secondary m-2" onClick={toLowerOn} >Convert into Lowercase</button>
                <button className="btn btn-dark m-2 " onClick={handleCopy} >To Select & Copy Text</button>
                <button className="btn btn-secondary m-2" onClick={handleSpace} >To Remove Extra space</button>
                <button className="btn btn-secondary m-2" onClick={clearArea} >To Clear TextArea</button>
            </div>
        </div>
        <div className="container mt-3 border rounded border-3 ">
            <h3 className='pt-2 pb-2'>Your Text Summary</h3>
            <p>Word : {text===0 ?text.split(" ").length:text.split(" ").length} <br /> Characters : {text.length}</p>
            <h3>Preview</h3>
            <p className='text-break py-2 px-1 border bg-dark-subtle rounded'>{text}</p>
        </div>
    </>
    )
}
