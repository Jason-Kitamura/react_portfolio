import React, { useState } from 'react';
import './artpage.css'

import BasicRows from './Masonry'

function ArtPage() {

    return(
        <div>
            <h1 class='header'><p>Art Portfolio</p></h1>
            <div class='container' id='box'>
                <div class='row'>
                    <div id='masonry'>
                        <BasicRows/>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default ArtPage;