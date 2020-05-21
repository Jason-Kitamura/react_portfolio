import React, { useState } from 'react';
import './gallery.css'

import BasicRows from './Masonry'

function GalleryPage() {

    return(
        <div>
            <h1 class='header'><p>PhotoGallery</p></h1>
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

export default GalleryPage;