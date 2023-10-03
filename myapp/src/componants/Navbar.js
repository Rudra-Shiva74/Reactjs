import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ background: props.setbgColor, color: props.setText }}>
                <div className="container-fluid">
                    <Link style={{ background: props.setbgColor, color: props.setText }} className="navbar-brand " to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={{ background: props.setbgColor, color: props.setText }} className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ background: props.setbgColor, color: props.setText }} className="nav-link" to="/about">{props.about}</Link>
                            </li>
                            
                        </ul>
                        <div className="form-check form-switch">
                            <button style={{ background: props.setbgColor, color: props.setText }} className={`form-check-label border border-0 bg-${props.mode} text-${props.text}`} onClick={props.toggleMode}><i className="fa-solid fa-moon fa-shake"></i></button>
                        </div>
                        <div className="form-check form-switch">
                            <input style={{ background: props.setbgColor, color: props.setText }} type="color" className="form-control form-control-color" onChange={props.BgColor} id="exampleColorInput" value="#563d7c" title="Choose your color" />
                        </div><div className="form-check form-switch">
                            <input type="color" className="form-control form-control-color" onChange={props.TextColor} id="exampleColorInput" value="#563d7c" title="Choose your color" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

//here we veryfy the props
//we make is require also
Navbar.propTypes = { title: PropTypes.string.isRequired, about: PropTypes.string.isRequired }

//we set the default props also
// Navbar.defaultProps = {
//     title: "set title here", about: "set number here"
// }