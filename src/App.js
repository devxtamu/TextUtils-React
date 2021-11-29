import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
 const [mode, setMode] = useState("light");
 const [alert, setAlert] = useState(null);
 const showAlert = (msg, typ) =>{
   setAlert({
     message:msg,
     type:typ
   })

   setTimeout(() => {
     setAlert(null)
   }, 1500);
 }
 const toggleMode = () =>{
  if (mode==="light"){
     setMode("dark")
     document.body.style.backgroundColor="#17252b"
     showAlert("Dark Mode has been enabled","success")
    document.title = " TextUtils - Dark Mode"
    }
  else{
    setMode("light")
    document.body.style.backgroundColor = "white"
    showAlert("Dark Mode has been disabled", "success")
    document.title = 'TextUtils - Home'
  }
}
  return (
    <Router>
    <Navbar title="My App" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Routes>
        <Route  exact path='/about' element={<About mode={mode}/>}/>
        <Route  exact path='/' element= {<TextForm showAlert={showAlert} heading= "Enter the text to analyze" mode={mode}/>}/>
        </Routes>   
    </Router>
  );
}
export default App;
