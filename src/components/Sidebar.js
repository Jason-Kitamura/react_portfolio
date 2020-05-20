import React, {} from 'react';
import { Link } from "react-router-dom";
import '../App.css'

function SideBar() {

    const white = {
        color : 'whitesmoke',
        textDecoration : 'none'
    }

    function toggleSideBar() {
        document.getElementById('sideBar').classList.toggle('active');
        console.log('sidebar')
    }

    return(
        <div id='sideBar'>
        <button class='toggle-btn' onClick={toggleSideBar}><i class='fa fa-bars fa-2x'></i></button>
            <ul className='sideList'>
                <Link to="/home" style={white} >
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/projects/count-on-me" style={white} >
                    <li>
                        Coding Projects
                    </li>
                </Link>
                <Link to="/portfolio" style={white} >
                    <li>
                        Art Portfolio
                    </li>
                </Link>
                <Link to="/gallery" style={white} >
                    <li>
                        Photo Gallery
                    </li>
                </Link>
                <Link to="/home" style={white} >
                    <li>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    )
}


export default SideBar;