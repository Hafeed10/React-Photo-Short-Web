import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navbar = [
        {
            id: 1,
            name: 'Home',
            path: 'Home/',
        },
        {
            id: 2,
            name: 'About',
            path: 'About/',
        },
        {
            id: 3,
            name: 'Photo',
            path: 'Photo/',
        },
        {
            id: 4,
            name: 'Service',
            path: 'Service/',
        },
        {
            id: 5,
            name: 'Contact',
            path: 'Contact/',
            cName: 'nav-links'
        },
    ];

    const nick = [
        {
            id: 6,
            name: 'Research',
            path: '/', // Update with actual path
            cName: 'nav-links' // Update with actual class name if needed
        },
    ];

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="section-wrapper">
                <ul>
                    {/* Rendering navbar items */}
                    {navbar.map(item => (
                        <li key={item.id}>
                            <a href={item.path} className={item.cName}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                    
                    {/* Rendering nick items */}
                    {nick.map(item => (
                       <li className='button' key={item.id}>
                        {item.path} {item.name}
                       </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
