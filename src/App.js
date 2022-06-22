import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar'
// import About from './components/About'
import Home from './components/Home'
// import Contactus from './components/Contactus'
import Login from './components/Login'
import Registration from './components/Registration'


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/about" element={<About />} /> */}

        {/* <Route path="/contactus" element={<Contactus />} /> */}

        <Route path="/login" element={<Login/>}/>

        <Route path="/login/registration" element={<Registration/>}/>
        </Routes>
      
      <br/>
      {/* <Footer/> */}
    </div>
  );
}
export default App;