import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
// import About from './components/About';
// import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
const [mode, setmode] = useState('light')
const [alert, setAlert] = useState(null)

const showAlert= (message,type)=>{
  setAlert({
    message:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },1000)
}
const toggleMode=()=>{
  if(mode === 'light'){
    setmode('dark')
   document.body.style.backgroundColor='black'
   document.body.style.color='white'
   showAlert('Dark mode Enabled','success')
   document.title = "TextUtlis - Dark Mode"
  }else{
    setmode('light')
    document.body.style.backgroundColor='unset'
    document.body.style.color='black'
       showAlert('Light mode Enabled','success')
        document.title = "TextUtlis - Light Mode"
  }
}
  return (
  <React.Fragment> 
    {/* <BrowserRouter> */}
<Navbar mode ={mode} toggleMode = {toggleMode} />

<div className="container">
  <Alert alert={alert}/>
{/* <Routes> */}
  {/* <Route path='/about' element={<About mode ={mode}/>} /> */}
  {/* <Route path='/' element={ */}
  <TextForm heading='Enter the text below' mode ={mode} showAlert={showAlert}/>
  {/* }/> */}
  {/* </Routes> */}
  </div>
{/* </BrowserRouter> */}



  </React.Fragment> 
  );
}

export default App

