import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import '../../App.css'
import './projects.css'

import Pic from '../../assets/placeholder.png'
// import COM from '../../assets/projects/COMlogin.gif'
import Project1 from '../../assets/projects/COM.JPG'
import Project2 from '../../assets/projects/Chess.JPG'
import Project3 from '../../assets/projects/Realtor.JPG'
import Project4 from '../../assets/projects/farmer.JPG'

import CountOnMe from './Display/COM.js'
import Chess from './Display/Chess.js'
import MyRealtor from './Display/Realtor.js'
import FarmerFriend from './Display/Farmer.js'


function ProjectPage() {

    const [ project, setProject] = useState('');

    const white = {
        color : 'whitesmoke',
        textDecoration : 'none'
    }


    return(
        <div>
            <h1 class='header'><p>Coding Projects</p></h1>
            <div id='projectBox'>
                <div class='row' id='projectRow'>
                 
                        <Switch>
                            <Route  path={["/projects/chess"]} component={Chess} />
                            <Route  path={["/projects/my-realtor"]} component={MyRealtor} />
                            <Route  path={["/projects/farmers-friend"]} component={FarmerFriend} />
                            <Route  path={["/projects/count-on-me"]} component={CountOnMe} />
                        </Switch>
               
                    {/* <div class='col-md-9' id='display'>
                        <div class='row' id='projectScreen'>
                            <div id='screen'>
                                <img src={COM} alt='Count on-Me'></img>
                            </div>
                        </div>
                        <div class='row' >
                            <div id='projectInfo'>
                                <h3>
                                    Count on-Me
                                    <a href='https://github.com/Jason-Kitamura/Count-on-Me' target='_blank'>
                                        <i class='fab fa-github  fa-2x gitIcon'>
                                            <span class='githubHover'>Github Link</span>
                                        </i>
                                    </a>
                                </h3>
                                <a href='https://goaltracke.herokuapp.com/'><p>https://goaltracke.herokuapp.com/</p></a>
                                <p>Count on-Me is a robust and comprehensive smart goal setting software program that helps you set, track and share goals build habits, and interact with a social network of users. Count on-Me helps users acheive their goals and increase their productivity by adding the element of accountability with a news feed of other user's progress.</p>
                            </div>
                        </div>
                    </div> */}
                    <div class='col-md-3' id='projectList'>
                        <h3 >Project List</h3>
                        <div class='list'>
                            <div class='row'>
                               <div class='thumbnail col-sm-6 col-md-12'> 
                                    <Link to="/projects/count-on-me" style={white} onClick={ (e) => setProject('com')}>
                                        <div class='row' class='thumbPic'>
                                            <img src={Project1} alt='pic'></img>
                                        </div>
                                        <div class='row' class='thumbInfo'>
                                            Count on-Me
                                            <p>Goal Tracking Social Media app</p>
                                        </div>
                                    </Link>
                                </div>
                                <div class='thumbnail col-sm-6 col-md-12'>
                                   <Link to="/projects/chess" style={white} onClick={(e) => setProject('chess')}>
                                        <div class='row' class='thumbPic'>
                                            <img src={Project2} alt='pic'></img>
                                        </div>
                                        <div class='row' class='thumbInfo'>
                                            Chess
                                            <p>Chess build with JavaScript/ JQuery</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='thumbnail col-sm-6 col-md-12'>
                                    <Link to="/projects/my-realtor" style={white} onClick={(e) => setProject('realtor')}>
                                        <div class='row' class='thumbPic'>
                                            <img src={Project3} alt='pic'></img>
                                        </div>
                                        <div class='row' class='thumbInfo'>
                                            My Realtor
                                            <p>Real Estate app for Agent listings (Realtor API)</p>
                                        </div>
                                    </Link>
                                </div>
                                <div class='thumbnail col-sm-6 col-md-12'>
                                    <Link to="/projects/farmers-friend" style={white} onClick={(e) => setProject('farmer')}>
                                        <div class='row' class='thumbPic'>
                                            <img src={Project4} alt='pic'></img>
                                        </div>
                                        <div class='row' class='thumbInfo'>
                                            Farmer's Friend
                                            <p>Provides farming knowlege based on current location</p>
                                        </div> 
                                    </Link>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}


export default ProjectPage;