import React from 'react';
import './App.css'
import Header from './components/Header';
import SideBar from './components/Sidebar'

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      
      <SideBar/>
      <div class='container'>
        <Header/>
      </div>
    </div>
  );
}

export default App;
