import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            pass: null,
            branch: null
        }
    }
    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const branch = e.target.branch.value;
        this.setState({ name, email, pass, branch }, () => {
            console.log(this.state);
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit} action="">
                    <input type="text" placeholder="Enter Your Name" name="name" />
                    <input type="email" placeholder="Enter Your Email" name="email" />
                    <input type="password" placeholder="Enter Your Password" name="pass" />
                    <input type="text" placeholder="Enter Your Branch" name="branch" />
                    <button type="submit">Hello</button>
                </form>
                <button>Hello</button>
            </div>
        )
    }
}
export default Form;