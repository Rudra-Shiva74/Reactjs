import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  state = { progress: 0 }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <LoadingBar
              color='yellow'
              progress={this.state.progress}
            />
            <Navbar />
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" PageSize={9} country={"in"} category={"general"} />} />
              <Route exact path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" PageSize={9} country={"in"} category={"business"} />} />
              <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" PageSize={9} country={"in"} category={"entertainment"} />} />
              <Route exact path="/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" PageSize={9} country={"in"} category={"health"} />} />
              <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" PageSize={9} country={"in"} category={"science"} />} />
              <Route exact path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" PageSize={9} country={"in"} category={"sports"} />} />
              <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" PageSize={9} country={"in"} category={"technology"} />} />
            </Routes>
          </div>
        </Router >
      </>
    )
  }
}