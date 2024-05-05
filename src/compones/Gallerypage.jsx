import React from 'react';
import './gallery.css';
import Logo1 from '../imag/1934823-e1540532501723.jpg';
import Logo2 from '../imag/3_Graphic_Design.webp';
import Logo3 from '../imag/imge-3.jpg';
import Logo4 from '../imag/img-5.jpg'

const GalleryPage = () => {
    return (
        <div className="gallery">
            <div className="section-content">
                {/* <h3>Gallery</h3> */}
                <div className="image-container">
                    <img src={Logo1} alt="" className="image-small" />
                    <img src={Logo2} alt="" className="image-medium" />
                    <img src={Logo3} alt="" className="image-large" />
                    <img src={Logo2} alt="" className="image-medium" />
                    <img src={Logo1} alt="" className="image-small" />
                    {/* Add more images here */}
                </div>
            </div>
        </div>
    );
}

export default GalleryPage;
