import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFonts from './Components/TextForms';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type 
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Navbar" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextFonts showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
