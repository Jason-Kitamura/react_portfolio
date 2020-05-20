import React, {} from 'react';
import { Link } from "react-router-dom";
import '../projects.css'

import ChessGif from '../../../assets/projects/Chess.gif'


function Chess() {

    return(
        <div class='col-md-9' id='display'>
            <div class='row' id='projectScreen'>
                <div id='screen'>
                    <img src={ChessGif} alt='Chess'></img>
                </div>
            </div>
            <div class='row' >
                <div id='projectInfo'>
                    <h3>
                        Chess
                        <a href='https://github.com/Jason-Kitamura/Chess' target='_blank'>
                            <i class='fab fa-github  fa-2x gitIcon'>
                                <span class='githubHover'>Github Link</span>
                            </i>
                        </a>
                    </h3>
                    <a href='https://jason-kitamura.github.io/Chess/'><p>https://jason-kitamura.github.io/Chess/</p></a>
                    <p>This is a simple Chess game build off of Vanilla JavaScript, JQuery, CSS, and HTML. Hit the link to play the game and test it out!</p>
                </div>
            </div>
        </div>
    )
}


export default Chess;