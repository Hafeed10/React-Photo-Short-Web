import React from 'react';
import './footer.css';

const Footerpage = () => {
    return (
        <>
            <footer id="footer">
                <div className="col col1">
                    <h5 className='hed'>CoolSite</h5>
                    <p className='max1'>Made with <span style={{ color: "#BA6573" }}>❤</span> by Hafe</p>
                    <div className="social">
                        <a href="#" target="_blank" className="link"><img src="https://assets.codepen.io/9051928/codepen_1.png" alt="" /></a>
                        <a href="#" target="_blank" className="link"><img src="https://assets.codepen.io/9051928/x.png" alt="" /></a>
                        <a href="#" target="_blank" className="link"><img src="https://assets.codepen.io/9051928/youtube_1.png" alt="" /></a>
                    </div>
                    <p style={{ color: "#818181", fontSize: "smaller" }}>2024 © All Hafeex Max</p>
                </div>
                <div className="col col2">
                    <p className='loop1'>About</p>
                    <p className='loop1'>Our mission</p>
                    <p className='loop1'>Privacy Policy</p>
                    <p className='loop1'>Terms of service</p>
                </div>
                <div className="col col3">
                    <p className='loop1'>Services</p>
                    <p className='loop1'>Products</p>
                    <p className='loop1'>Join our team</p>
                    <p className='loop1'>Partner with us</p>
                </div>
                <div className="backdrop"></div>
            </footer>
        </>
    );
}

export default Footerpage;
