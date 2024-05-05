import React from 'react';
import './home.css';
import Logo from '../imag/1695524296879.jpeg';
import Logo1 from '../imag/1934823-e1540532501723.jpg'
import Logo2 from '../imag/3_Graphic_Design.webp'
import Logo3 from '../imag/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg'
import Logo4 from '../imag/how-subliminal-images-impact-your-brain-and-behavior-344858-960x540.jpg'

const Homepage = () => {
    return (
        <div className='home'>
            <div className="section">
                <div className="imgsection">
                    <img src={Logo} alt="" />
                </div>
                <div className="imgitem">
                    <img src={Logo1} alt="" />
                    <img src={Logo2} alt="" />
                    <img src={Logo3} alt="" />
                    <img src={Logo4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
