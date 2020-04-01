import React from 'react';
import Logo from '../images/Jerry-logo.png';
import { Link } from 'react-scroll';
import { scrollEffect } from './scrollEffects';

//STYLES
import './styles/navigationBar.scss';

const NavigationBar = () => {

    return (
        <div className='navigationBar'>
            <Link 
                className='links'
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
            ><img src={Logo} id='logo' alt=''/></Link>
            <div className='linksContainer'>
                <Link 
                    className='links'
                    activeClass='active'
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-170}
                    duration={500} 
                >About</Link>
                <Link 
                    className='links'
                    activeClass='active'
                    to='projectsTitle'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                >Projects</Link>
                <Link 
                    className='links'
                    activeClass='active'
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={900}
                    duration={500} 
                >Contact</Link>
            </div>
        </div>
    )
}

export default NavigationBar;