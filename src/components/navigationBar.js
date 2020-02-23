import React from 'react';
import { Link } from 'react-router-dom';

//STYLES
import './styles/navigationBar.scss';

const NavigationBar = () => {
    return (
        <div className='navigationBar'>
            <div className='linksContainer'>
                <Link className='links'>Home</Link>
                <Link className='links'>About</Link>
                <Link className='links'>Contact</Link>
            </div>
        </div>
    )
}

export default NavigationBar;