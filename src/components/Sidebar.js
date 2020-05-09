import React, {} from 'react';
import '../App.css'

function SideBar() {

    function toggleSideBar() {
        document.getElementById('sideBar').classList.toggle('active');
    }

    return(
        <div id='sideBar'>
        <button class='toggle-btn' onClick={toggleSideBar}><i class='fa fa-bars fa-2x'></i></button>
            <ul className='sideList'>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}


export default SideBar;