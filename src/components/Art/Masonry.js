import React, { useState, useCallback} from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel from "react-images";
import { photos } from "./photos";
import './artpage.css';


/* popout the browser and maximize to see more rows! -> */
function BasicRows () {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
    }, []);
  

    return (
        <div>
            <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
            />
            <h3 class='title'>Images</h3>
            <Gallery photos={photos} onClick={openLightbox}  />
            
                    
               
        </div>
    )
} 
// render(<BasicRows />, document.getElementById("masonry"));

export default BasicRows;
