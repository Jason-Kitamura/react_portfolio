import React from 'react';
import './App.css'
import Header from './components/Header';
import SideBar from './components/Sidebar'
import HomePage from './components/Home/HomePage'
import ProjectPage from './components/Projects/ProjectPage'
import ArtPage from './components/Art/ArtPage'
import GalleryPage from './components/Gallery/GalleryPage'
import Footer from './components/Footer'
import Background from './components/Background'

import { BrowserRouter as Router, Route, } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <Router>

        <Background/>
        <SideBar/>
        <Footer/>
        <Route path={["/projects"]} component={ProjectPage} />
        <Route path={["/portfolio"]} component={ArtPage} />
        <Route path={["/gallery"]} component={GalleryPage} />


        <Route exact path={["/", "/home"]} component={HomePage} />

      </Router>
    </div>
  );
}

export default App;
