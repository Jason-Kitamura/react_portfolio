import React, {} from 'react';
import { Link } from "react-router-dom";
import '../projects.css'

import Farmer from '../../../assets/projects/farmer.gif'


function FarmerFriend() {

    return(
        <div class='col-md-9' id='display'>
            <div class='row' id='projectScreen'>
                <div id='screen'>
                    <img src={Farmer} alt='Count on-Me'></img>
                </div>
            </div>
            <div class='row' >
                <div id='projectInfo'>
                    <h3>
                        Farmer's Friend
                        <a href='https://github.com/koustub/farmerPeer' target='_blank'>
                            <i class='fab fa-github  fa-2x gitIcon'>
                                <span class='githubHover'>Github Link</span>
                            </i>
                        </a>
                    </h3>
                    {/* <a href='https://goaltracke.herokuapp.com/'><p>https://goaltracke.herokuapp.com/</p></a> */}
                    <p>Farmer's Friend as a plant growing app that provides users faarming knowledge based on their location. Farmer's Friend provides a satelite image of their location, environmental statistics such as temperature, soil moisture, and humidity, as well as the best species of crops for their environment.</p>
                </div>
            </div>
        </div>
    )
}


export default FarmerFriend;