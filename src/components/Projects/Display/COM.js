import React, {} from 'react';
import { Link } from "react-router-dom";
import '../projects.css'

import COM from '../../../assets/projects/COMlogin.gif'


function CountOnMe() {

    return(
        <div class='col-md-9' id='display'>
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
        </div>
    )
}


export default CountOnMe;