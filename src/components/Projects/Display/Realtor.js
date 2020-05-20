import React, {} from 'react';
import { Link } from "react-router-dom";
import '../projects.css'

import Realtor from '../../../assets/projects/Realtor.gif'


function MyRealtor() {

    return(
        <div class='col-md-9' id='display'>
            <div class='row' id='projectScreen'>
                <div id='screen'>
                    <img src={Realtor} alt='Count on-Me'></img>
                </div>
            </div>
            <div class='row' >
                <div id='projectInfo'>
                    <h3>
                        My Realtor
                        <a href='https://github.com/stephanieblom/myRealtor' target='_blank'>
                            <i class='fab fa-github  fa-2x gitIcon'>
                                <span class='githubHover'>Github Link</span>
                            </i>
                        </a>
                    </h3>
                    <a href='https://myrealtorapp.herokuapp.com/'><p>https://myrealtorapp.herokuapp.com/</p></a>
                    <p>My Realtor is an app designed for Real Estate agents to create a profile with thier listings and info. Users can sign-in to their profile, search for listings (using REALTOR API) and add them to their profile. Guests can also view others profiles without the ability to edit, and agent by email via email form at the bottom</p>
                </div>
            </div>
        </div>
    )
}


export default MyRealtor;