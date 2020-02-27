import React from 'react';
import RVWay from '../images/RV-Way.png'
import Amiibos from '../images/Amiibos-Web-App.png'

//STYLES
import './styles/projects.scss'

const Projects = props => {
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
                        The project had a deadline o f 2 months, my contribution was in the front end team.
                    </p>
                </section>
                <section className='projectsSections'>
                    <a href='https://react-redux-app.jerryosorio.now.sh/' className='pictureLink'>
                        <img src={Amiibos} className='wallpapers'/>
                    </a>
                    <h3 className='projectTitle'>Amiibo's Web App</h3>
                    <p className='projectDescription'>
                        A simple app that displays in a beautiful way the collection's of Amiibos up until today's date. 
                    </p>
                </section>
                {/* <section className='projectsSections'>Project 3</section> */}
            </div>
        </>
    )
}

export default Projects;