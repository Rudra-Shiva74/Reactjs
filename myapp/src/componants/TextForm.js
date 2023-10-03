import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        if (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length > 0) props.setAlert(["Success", "Start Speaking Now!",]);
        else props.setAlert(["Sorry", "You not Write Any Word!"]);
        setTimeout(() => {
            props.setAlert([null, null]);
        }, 2000)
    };
    const write = () => {
        window.speechSynthesis.cancel();
        setText('');
        if (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length > 0) props.setAlert(["Success", "All Word Are Deleted!"]);
        else props.setAlert(["Sorry", "You not Write Any Word!"]);
        setTimeout(() => {
            props.setAlert([null, null]);
        }, 2000)
    }
    const stop = () => {
        window.speechSynthesis.cancel();
        if (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length > 0) props.setAlert(["Success", "Stop Speaking Now!"]);
        else props.setAlert(["Sorry", "You not Write Any Word!"]);
        setTimeout(() => {
            props.setAlert([null, null]);
        }, 2000)
    }
    const handelUpClick = () => {
        setText((text).toUpperCase());
        window.speechSynthesis.cancel();
        if (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length > 0) props.setAlert(["Success", "UpperCase Converted Successfully!"]);
        else props.setAlert(["Sorry", "You not Write Any Word!"]);

        setTimeout(() => {
            props.setAlert([null, null]);
        }, 2000)
    };

    const handelloClick = () => {
        setText((text).toLowerCase());
        if (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length > 0) {
            window.speechSynthesis.cancel();
            props.setAlert(["Success", "LoweCase Converted Successfully!"]);
        }
        else props.setAlert(["Sorry", "You not Write Any Word!"]);

        setTimeout(() => {
            props.setAlert([null, null]);
        }, 2000)

    };

    const onchangehandel = (event) => {
        setText(event.target.value);
        window.speechSynthesis.cancel();
    }

    const copytext = () => {
        navigator.clipboard.writeText(text);
        if (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length > 0) props.setAlert(["Success", "Copy Your Text!"]);
        else props.setAlert(["Sorry", "You not Write Any Word!"]);
        setTimeout(() => {
            props.setAlert([null, null]);
        }, 2000)
    }
    return (
        <div className='container' style={{ background: props.setbgColor, color: props.setText }}>
            <div className="container text-start">
                <h2 className={`text-${props.text}`}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.text}  bg-${props.mode} border border-${props.text} border-3`} value={text} onChange={onchangehandel} id="MyBox" rows="8"></textarea>
                </div>
                <div className='row'>
                    <button style={{ background: props.setbgColor, color: props.setText, border: `2px solid ${props.setText}` }} className={`btn ms-2 my-2 col-lg-2 btn-outline-${props.text}`} onClick={handelUpClick}>Convert to Uppercase</button>
                    <button style={{ background: props.setbgColor, color: props.setText, border: `2px solid ${props.setText}` }} className={`btn ms-2 my-2 col-lg-2 btn-outline-${props.text}`} onClick={handelloClick}>Convert to Lowercase</button>
                    <button style={{ background: props.setbgColor, color: props.setText, border: `2px solid ${props.setText}` }} className={`btn ms-2 my-2 col-lg-2 btn-outline-${props.text}`} onClick={speak}>Speak</button>
                    <button style={{ background: props.setbgColor, color: props.setText, border: `2px solid ${props.setText}` }} className={`btn ms-2 my-2 col-lg-2 btn-outline-${props.text}`} onClick={stop}>Stop</button>
                    <button style={{ background: props.setbgColor, color: props.setText, border: `2px solid ${props.setText}` }} className={`btn ms-2 my-2 col-lg-2 btn-outline-${props.text}`} onClick={write}>Clear</button>
                    <button style={{ background: props.setbgColor, color: props.setText, border: `2px solid ${props.setText}` }} className={`btn ms-2 my-2 col-lg-2 btn-outline-${props.text}`} onClick={copytext}>Copy Text</button>
                </div>
            </div>
            <div className="container my-2 text-start">
                <h2 className={`text-${props.text}`}>Enter text summary</h2>
                <p className={`text-${props.text}`}>{text.length === 0 ? 0 : text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p className={`text-${props.text}`}>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minute to read</p>
                <h2 className={`text-${props.text}`}>Preview</h2>
                <p className={`text-${props.text}`}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length > 0 ? text : "Enter Something to preview it here"}</p>
                <p className={`text-${props.text}`}>Reverse the word : {text.split(/\s+/).filter((element) => { return element.length !== 0 }).reverse().join(' ')}</p>

            </div>
        </div>
    )
}