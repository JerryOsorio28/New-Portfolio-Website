import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../images/Jerry-logo.png'
import { Link } from 'react-scroll';

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
        
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
            let projectsTitle = document.getElementById('projectsTitle')
            projectsTitle.style.animation = 'fadeInUp 1s'
            projectsTitle.style.visibility = 'visible'

            let project1 = document.getElementsByClassName('projectsSections')[0]
            project1.style.animation = 'fadeInUp 1s'
            project1.style.visibility = 'visible'

            let project2 = document.getElementsByClassName('projectsSections')[1]
            project2.style.animation = 'fadeInUp 1s'
            project2.style.visibility = 'visible'
        }
    }
    // We invoke the 'scrollEffect' once the window object detects scrolling
    window.onscroll = function () {scrollEffect()}


    return (
        <div className='navigationBar'>
            <Link 
                className='links'
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
            ><img src={Logo} id='logo'/></Link>
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
                    offset={-70}
                    duration={500} 
                >Contact</Link>
            </div>
        </div>
    )
}

export default NavigationBar;