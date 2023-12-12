import React from 'react'
import Navbar from './Component/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default function App() {

  return (
    <Router>
      <div className='text-light'>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
        </Routes>
      </div>
    </Router >
  )
}
