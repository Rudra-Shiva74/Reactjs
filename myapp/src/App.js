import { useState } from 'react';
import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar'
import TextForm from './componants/TextForm'
import { Alert } from './componants/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import Effect from './componants/Effect';



function App() {


  const [Mode, setMode] = useState('light');
  const [text, setText] = useState('dark');
  const [Alert1, setAlert] = useState([null, null]);
  const [textColor, settextColor] = useState(null);
  const [bgColor, setbgColor] = useState(null);


  // setInterval(() => {
  //   document.title = "Abhishek"
  // }, 1000);
  // setInterval(() => {
  //   document.title = "Tiwari"
  // }, 2000);

  const Theme = () => {
    if (Mode === 'light') {
      setMode('dark');
      setText('light');
      setAlert(["Success", "Dark Mode is on Successfully!", null]);
      document.body.style.backgroundColor = 'black';
      settextColor(null);
      setbgColor(null);
      setTimeout(() => {
        setAlert([null, null]);
      }, 2000)
    }
    else {
      setMode('light');
      setText('dark');
      setAlert(["Success", "Light Mode is on Successfully!", null]);
      document.body.style.backgroundColor = 'white';
      settextColor(null);
      setbgColor(null);
      setTimeout(() => {
        setAlert([null, null]);
      }, 2000);
    }
  }

  const BgColor = (event) => {
    document.body.style.backgroundColor = event.target.value;
    setMode(null);
    setbgColor(event.target.value);
  }
  const TextColor = (event) => {
    settextColor(event.target.value);
    setText(null);
  }
  return (
    <Router>
      <div className="App">
        <Navbar title="AT" about="About" text={text} mode={Mode} setText={textColor} toggleMode={Theme} BgColor={BgColor} TextColor={TextColor} />
        {(Alert1[0] === "Success" || Alert1[0] === "Sorry") ? <Alert msg={Alert1} /> : <div style={{ height: '60px' }}></div>}
        <Routes>
          <Route exact path="/about" element={<About text={text} mode={Mode} setText={textColor} setbgColor={bgColor} />} />
          <Route exact path="/" element={<TextForm setAlert={setAlert} setText={textColor} heading="Rudra text manipulation website." text={text} mode={Mode} />} />
        </Routes>
      </div>
    </Router >


  );
}
export default App;
