import React from 'react'
import { useState } from "react"

export default function TextForm(props) {
    const [text,setText]= useState("Enter text here...")
    const handleOnUpperCase = ()=>{
        console.log(text)
        setText(text.toUpperCase())
    }
    const handleOnChange = (event)=>{
        // console.log("on Change")
        setText(event.target.value)
    }
    return (
        <>
        <div className="container">
        <h2>{props.heading}</h2>
        <form className="form-label">
            <label htmlFor="textbox">Message:</label>
            <textarea className="form-control" onChange={handleOnChange} value={text} id="textbox" rows= "8"></textarea>
        </form>
        <button className="btn btn-primary" onClick={handleOnUpperCase}>convert To UpperCase</button>
        <h3 className='mt-2 bg-dark text-light p-2'>Your Text Summary</h3>
        <p className='text-muted'>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    )
}
