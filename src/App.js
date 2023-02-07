import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
import About from './components/About';

import { React, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg,type) => {
    setAlert({
      msg : msg,
      type : type,
      
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      showAlert("Switched to dark mode","success")
      setMode("dark")
    }
    else 
    {
      showAlert("Switched to light mode","success")
      setMode("light")
    }
  }
  return (
    <div className={`bg-${mode}`}>
    <div className={`container my-3 bg-${mode}`}>
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
      <Alert alert={alert}/>
        <Routes>
          
          <Route path="/about" element={<About />}/>
            
          <Route path="/" element={<TextBox title="Analyse text here !!" mode={mode} showAlert={showAlert}/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
