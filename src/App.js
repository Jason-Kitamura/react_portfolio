import React from 'react';
import './App.css'
import Header from './components/Header';
import SideBar from './components/Sidebar'
import HomePage from './components/Home/HomePage'
import Footer from './components/Footer'
import Background from './components/Background'

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <Background/>
      <SideBar/>
      <HomePage/>
      <Footer/>

      {/* <div class='container'>
        <Header/>
        <img src='./assets/profilePNG.png'/>
      </div> */}
    </div>
  );
}

export default App;
