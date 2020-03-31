import React from 'react';
import RVWay from '../images/RV-Way.png'
import Amiibos from '../images/Amiibos-Web-App.png'

//STYLES
import './styles/projects.scss'

const Projects = props => {

    // This function waits for any scroll to happen, and changes the properties for the nav bar,
    // as well as setting back everything to it's originality when scroll is back at the top.
    const scrollEffect = () => {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
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
        <>
            <div id='projectsTitle'>PROJECTS</div>
            <div id='projectsContainer'>
                <section className='projectsSections'>
                    <a href='https://www.rvnav.com/' className='pictureLink'>
                        <img src={RVWay} className='wallpapers'/>
                    </a>
                    <h3 className='projectTitle'>RV Way</h3>
                    <p className='projectDescription'>
                        An app meant to take safely RV families to their destination,  generating optimized routes with data that takes into consideration the vehicle's height for low clearances, weight, width, length and more. 
                        The project had a deadline of 2 months, my contribution was in the front end team.
                    </p>
                </section>
                <section className='projectsSections'>
                    <a href='https://amiibofinder.com' className='pictureLink'>
                        <img src={Amiibos} className='wallpapers'/>
                    </a>
                    <h3 className='projectTitle'>Amiibo's Web App</h3>
                    <p className='projectDescription'>
                    A simple app that displays elegantly the collection of Amiibos up until today's
                    date! The backend is handled by a public API, the entirety of the project was made by me and it includes images, music, and
                    animations.
                    </p>
                </section>
            </div>
        </>
    )
}

export default Projects;