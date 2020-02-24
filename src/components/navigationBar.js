import React from 'react';
import { Link } from 'react-router-dom';

//STYLES
import './styles/navigationBar.scss';

const NavigationBar = () => {

    // This function waits for any scroll to happen, and changes the properties for the nav bar,
    // as well as setting back everything to it's originality when scroll is back at the top.
    const scrollEffect = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            let navBar = document.getElementsByClassName('navigationBar')[0]
            navBar.style.backgroundColor = "#505050"
            navBar.style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.349)'
        } else {
            let navBar = document.getElementsByClassName('navigationBar')[0]
            navBar.style.backgroundColor = "#333333"
            navBar.style.boxShadow = 'none'
        }
    }
    // We invoke the 'scrollEffect' once the window object detects scrolling
    window.onscroll = function () {scrollEffect()}


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