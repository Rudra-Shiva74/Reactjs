import React, { Component } from 'react'
import "./App.css";
import Person from './component/person/Person';
import Form from './component/Form/Form';
import Form1 from './component/Form/Form1';
import Register from './component/project/Register';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: "Abhishek Tiwari",
          age: 23,
        },
        {
          name: "Rudransh Tiwari",
          age: 6,
        },
        {
          name: "Shivansh Tiwari",
          age: 5,
        }
      ],
      flag: true
    }
  }
  removeHamdler = (index) => {
    const per = this.state.persons;
    per.splice(index, 1);
    this.setState({ persons: per });

  }
  toggle = () => {
    if (this.state.flag) {
      this.setState({ flag: false });
    }
    else {
      this.setState({ flag: true })
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>toggle</button>
        {this.state.flag && this.state.persons.map((ele, index) => {
          return (
            <Person name={ele.name} age={ele.age} index={index} removeHamdler={() => this.removeHamdler(index)} key={index} />
          )
        })
        }
        <Form />
        <Form1 />
        <Register />
      </div >
    )
  }
}
export default App
