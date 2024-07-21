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
        <h1>{props.heading}</h1>
        <form className="form-label">
            <label htmlFor="textbox">Message:</label>
            <textarea className="form-control" onChange={handleOnChange} value={text} id="textbox" rows= "8"></textarea>
        </form>
        <button className="btn btn-primary" onClick={handleOnUpperCase}>convert To UpperCase</button>
        </>
    )
}
