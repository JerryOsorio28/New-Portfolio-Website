import React from 'react';
import './styles/middleBox.scss'
import MyPicture from '../images/portfolio-picture.png'

const MiddleBox = () => {

    setTimeout(() => {
        let description = document.getElementById('description')
        description.style.visibility = 'visible'
    }, 1600)

    setTimeout(() => {
        let otherDescription = document.getElementById('otherDescription')
        otherDescription.style.visibility = 'visible'
    }, 2600)

    // setTimeout(() => {
    //     let button = document.getElementById('contactMeButton')
    //     button.style.visibility = 'visible'
    // }, 3400)

    return (
        <div className='middleBox' id='home'>
            <h3 id='myName'>My name is Jerry Osorio Pagan</h3>
            <h1 id='description'>I am a Full Stack Web Developer from Puerto Rico.</h1>
            <div id='otherDescription'>
            I am a Full Stack Web Developer from Lambda School, originally from P.R., currently residing in Kissimmee, FL. Ever since I started coding, I've become very passionate about it, 
            there is this satisfying and unique feeling in, out of nothing, creating something that can solve real-life problems and make a change, one keystroke at a time.
                <p id='quote'>“First, solve the problem. Then, write the code.”</p>
            </div>
            {/* <button id='contactMeButton'>Contact me</button> */}
            <img src={MyPicture} id='myPicture' alt=''/>
        </div>
    )
}

export default MiddleBox;