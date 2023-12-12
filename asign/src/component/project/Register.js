import React, { Component } from "react";
import Greet from './Greet'
import Styled from "styled-components"
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRegister: false,
            name: null,
            email: null,
            password: null,
            branch: null,
            showpass: "password"
        }
    }
    StyledButton = Styled.button`
    display:block;
    padding:10px 5px;
    background-color:orange;
    `;
    togglePass = () => {
        if (this.state.showpass === 'password')
            this.setState({ showpass: "text" })
        else this.setState({ showpass: "password" })
    }
    submit = (e) => {
        e.preventDefault();
        this.setState({ isRegister: true, name: e.target.name.value });
    }
    render() {
        return (
            <div>
                {this.state.isRegister ? <Greet name={this.state.name} /> :
                    <form onSubmit={this.submit}>
                        <input type="text" placeholder="Enter Your Name" name="name" />
                        <input type="text" placeholder="Enter Your Email" name="email" />
                        <input type={this.state.showpass} placeholder="Enter Your Password" name="password" /><button type="button" onClick={this.togglePass} >show</button>
                        <input type="text" placeholder="Enter Your Branch" name="branch" />
                        <button type="Submit">Submit</button>
                    </form>}
                <this.StyledButton>Login</this.StyledButton>
            </div>
        )
    }
}
export default Register