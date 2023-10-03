
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  // A = "Abhishek Tiwari"
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Navbar />

            <Routes>
              <Route exact path="/" element={<News key="general" PageSize={9} country={"in"} category={"general"} />} />
              <Route exact path="/Business" element={<News key="business" PageSize={9} country={"in"} category={"business"} />} />
              <Route exact path="/Entertainment" element={<News key="entertainment" PageSize={9} country={"in"} category={"entertainment"} />} />
              <Route exact path="/Health" element={<News key="health" PageSize={9} country={"in"} category={"health"} />} />
              <Route exact path="/Science" element={<News key="science" PageSize={9} country={"in"} category={"science"} />} />
              <Route exact path="/Sports" element={<News key="sports" PageSize={9} country={"in"} category={"sports"} />} />
              <Route exact path="/Technology" element={<News key="technology" PageSize={9} country={"in"} category={"technology"} />} />
            </Routes>
          </div>
        </Router >
      </>
    )
  }
}

