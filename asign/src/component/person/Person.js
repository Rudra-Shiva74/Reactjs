import React, { Component } from "react";
import personStyle from './style.module.css';
class Person extends Component {
    // constructor(props)
    render() {
        return (
            <div className={personStyle.person} onClick={this.props.removeHamdler}>
                <h1>Name : {this.props.name}, Age : {this.props.age}</h1>
            </div>
        )
    }
}

export default Person