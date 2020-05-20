import React, {} from 'react';
import { Link } from "react-router-dom";
import '../../App.css'

import ProfilePic from '../../assets/ProPic4.png'
import Temp from '../../assets/placeholder.png'

import Pic1 from "../../assets/art/ManFace.JPG"
import Pic2 from "../../assets/art/planterSunrise.JPG"
import Pic3 from "../../assets/art/OldMan.JPG"

import Photo1 from '../../assets/photos/lighthouse.jpg'
import Photo2 from '../../assets/photos/yosemite.jpg'
import Photo3 from '../../assets/photos/jasper.jpg'

import Project1 from '../../assets/projects/COM.JPG'
import Project2 from '../../assets/projects/Chess.JPG'
import Project3 from '../../assets/projects/Realtor.JPG'



function HomePage() {

    const white = {
        color : 'whitesmoke',
    }

    return(
        <div class='container'>
            <h1 class='header'><p>Jason Kitamura</p></h1>
            <div id='icons'>
                <div class='row'>
                    <a href='https://www.linkedin.com/in/jason-kitamura-7968a719b/' target='_blank'><i class='fab fa-linkedin-in fa-2x' ></i></a>
                </div>
                <div class='row'>
                    <a href='https://github.com/Jason-Kitamura' target='_blank'><i class='fab fa-github fa-2x' ></i></a>
                </div>
                <div class='row'>
                    <a href='https://www.instagram.com/jasonkitamura/' target='_blank'><i class='fab fa-instagram fa-2x' ></i></a>
                </div>
            </div>
            <div id='info'>
                <div class='row'>
                    <div class='col-md-6'>
                    <img src={ProfilePic} id='profilePic'/>
                    </div>
                    <div class='col-md-6' id='bio'>
                        <p>
                            - Hi, I'm Jason and welcome to my portfolio site. Feel free to look around at my coding projects, art portfolio, and photo gallery!
                        </p>
                    </div>
                </div>
            </div>
            <div class='showBox'>
                <h5 class='boxTitle'><Link to='/projects/count-on-me' style={white}>Coding Projects</Link></h5>
                <div class='row boxRow'>
                    <div class='col-md-4'>
                         <img class='image' src={Project1} alt='placeholder'/>
                         <p class='imgTitle'>Count on-Me</p>
                    </div>
                    <div class='col-md-4'>
                         <img class='image' src={Project2} alt='placeholder'/>
                         <p class='imgTitle'>Chess</p>
                    </div>
                    <div class='col-md-4'>
                        <img class='image' src={Project3} alt='placeholder'/>
                        <p class='imgTitle'>My Realtor</p>
                    </div>
                </div>
            </div>
            <div class='showBox'>
                <h5 class='boxTitle'><Link to='/projects' style={white}>Art Portfolio</Link></h5>
                <div class='row boxRow'>
                    <div class='col-md-4'>
                         <img class='image' src={Pic1} alt='placeholder'/>
                         <p class='imgTitle'>Colored Face</p>
                    </div>
                    <div class='col-md-4'>
                         <img class='image' src={Pic2} alt='placeholder'/>
                         <p class='imgTitle'>Planter's SunRise</p>
                    </div>
                    <div class='col-md-4'>
                        <img class='image' src={Pic3} alt='placeholder'/>
                        <p class='imgTitle'>Wise Man</p>
                    </div>
                </div>
            </div>
            <div class='showBox'>
                <h5 class='boxTitle'><Link to='/gallery' style={white}>Gallery</Link></h5>
                <div class='row boxRow'>
                    <div class='col-md-4'>
                         <img class='image' src={Photo1} alt='placeholder'/>
                         <p class='imgTitle'>Lighthouse</p>
                    </div>
                    <div class='col-md-4'>
                         <img class='image' src={Photo2} alt='placeholder'/>
                         <p class='imgTitle'>Yosemite</p>
                    </div>
                    <div class='col-md-4'>
                        <img class='image' src={Photo3} alt='placeholder'/>
                        <p class='imgTitle'>Jasper</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomePage;