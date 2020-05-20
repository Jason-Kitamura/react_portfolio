import React, {} from 'react';
import { Link } from "react-router-dom";
import '../App.css'

function Footer() {

    const white = {
        color : 'whitesmoke'
    }
    
    return(
        <div id='footer' class='page-footer'>
            <div class='row'>
                <div class='col-md-6' id='contact'>
                    <Link to='/contact' style={white}>Contact</Link>
                </div>
                <div class='col-md-3'>
                    jasonkitamura@gmail.com
                </div>
                <div class='col-md-3'>
                    647-287-0776
                </div>
            </div>
        </div>
    )
}


export default Footer;