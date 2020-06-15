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
        <div>

            <button class='toggle-btn' onClick={toggleSideBar}><i class='fa fa-bars fa-2x'></i></button>

            <div id='sideBar'>
                <i class='fa fa-times fa-2x ' id='sideBarExit' onClick={toggleSideBar}></i>

                <ul className='sideList'>
              
                    <Link to="/home" onClick={toggleSideBar} style={white} >
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/projects/count-on-me" onClick={toggleSideBar} style={white} >
                        <li>
                            Coding Projects
                        </li>
                    </Link>
                    <Link to="/portfolio" onClick={toggleSideBar} style={white} >
                        <li>
                            Art Portfolio
                        </li>
                    </Link>
                    <Link to="/gallery" onClick={toggleSideBar} style={white} >
                        <li>
                            Photo Gallery
                        </li>
                    </Link>
                    {/* <Link to="/home" style={white} >
                        <li>
                            Contact
                        </li>
                    </Link> */}
                </ul>
            </div> 
        </div>
    )
}


export default SideBar;