import { useState } from 'react';
import Navbar from './components/Navbar';
import React from "react";
import Tform from './components/form';
import AlertBox from './components/AlertBox';
import Footer from './components/footer';
import About from './components/about';
import { Routes, Route } from "react-router-dom";
// import About from './components/about';
function App() {
  const[mode , setmod] = useState('secondary')
  const [alert, setalert] = useState(null)

  const showAlert = (massage , type)=>{
    setalert({
      msg: massage,
      Type: type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }
  let toggleMod = ()=>{
    if(mode === "secondary"){ 
      setmod("dark");
      document.body.style.backgroundColor = "darkgrey";
      document.body.style.color = "white";
      showAlert(' dark mode Enabled','success')
      document.title = "TextConvertor-DarkMode"
    }
    else{
      setmod("secondary")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = "";
      showAlert(' light mode Enabled','success')
      document.title = "TextConvertor-LightMode"
    }
  }
  return (
    <>
      <Navbar title='TextConvertor' info="about" mode = {mode} toggleMod = {toggleMod} />
      <AlertBox alertBox = {alert}/>
      {/* <Navbar/> */}
      <div className="container my-3 pt-4 pb-4">
          <Routes>
            <Route path='/' element={<Tform heading="Enter the text to Change" showAlert = {showAlert}/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
