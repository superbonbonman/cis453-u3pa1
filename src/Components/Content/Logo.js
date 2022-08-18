import React from 'react';
import './Logo.css';
import logo from './logo.jpg';

const Logo = () => (
    <div className='logo'>
        <img alt='geometric logo with stylized letters CS' src={logo} />
        <p>C.S. Jokes</p>
    </div>
)

export default Logo;