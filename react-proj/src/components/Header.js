import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [navItems] = useState(["Home", "About", "Service", "Contact"])
    return (
       <div className='nav-container'>
            <div className="logo">
                <h1 className="icon">Harry Fitness</h1>
            </div>
            <ul className="nav-list">
                {navItems.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
                <li className="joinnow">Join Now</li>
            </ul>
       </div>
    )
}

export default Header