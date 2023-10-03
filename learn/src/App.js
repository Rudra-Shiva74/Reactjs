import React from 'react';
import Navbar from './Component/Navbar';
import Effect from './Component/Effect';
import Component1 from './Component/Component1';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'light' }
    this.darkmode = this.darkmode.bind(this);
  }
  darkmode() {
    if (this.state.color === 'dark')
      this.setState({ color: 'light' })
    else
      this.setState({ color: 'dark' });
  }
  A = ['Abhishek', 'Tiwari', 'Rampur']
  render() {
    return (
      <>
        {/* <h1>My name is{this.state.color} Abhishek Tiwari</h1> */}
        <Effect />
        <Component1 />

        <Navbar text={this.state.color} darkmode={this.darkmode} color={'pink'} mark={12} />
        {this.A.map((el) => {
          return (<h1>Name is:{el}</h1>)
        })}
      </>
    )
  }
}