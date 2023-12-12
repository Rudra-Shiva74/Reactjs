import React, { Component } from "react";

class Form1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: ''
        }
    }
    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onClick={this.submit}>
                    <input type="text" placeholder="Enter Your Name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    <input type="email" placeholder="Enter Your Email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Form1