import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Car from './Components/Car'; // Import your Car component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Car />} />
      </Routes>
    </Router >
  );
}
export default App;



