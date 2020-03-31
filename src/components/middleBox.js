import React from 'react';
import './styles/middleBox.scss'

const MiddleBox = () => {
<<<<<<< HEAD

    setTimeout(() => {
        let description = document.getElementById('description')
        description.style.visibility = 'visible'
    }, 1400)
=======
    
    setTimeout(() => {
        let description = document.getElementById('description')
        description.style.visibility = 'visible'
    }, 1200)
>>>>>>> f72406dcf8a76409e4202357e1ad1025b88f4742

    setTimeout(() => {
        let otherDescription = document.getElementById('otherDescription')
        otherDescription.style.visibility = 'visible'
<<<<<<< HEAD
    }, 2400)

    // setTimeout(() => {
    //     let button = document.getElementById('contactMeButton')
    //     button.style.visibility = 'visible'
    // }, 3400)
=======
    }, 2200)

    setTimeout(() => {
        let button = document.getElementById('contactMeButton')
        button.style.visibility = 'visible'
    }, 3200)
>>>>>>> f72406dcf8a76409e4202357e1ad1025b88f4742

    return (
        <div className='middleBox' id='home'>
            <h3 id='myName'>My name is Jerry Osorio Pagan</h3>
            <h1 id='description'>I am a Full Stack Web Developer from Puerto Rico.</h1>
            <p id='otherDescription'>
            I am a Full Stack Web Developer from Lambda School, and ever since I started coding I have become very passionate about it, 
            there is this satisfying and unique feeling in, creating out of nothing, something that can solve real-life problems and make a change, one keystroke at a time.
                <p id='quote'>“First, solve the problem. Then, write the code.”</p>
            </p>
<<<<<<< HEAD
            {/* <button id='contactMeButton'>Contact me</button> */}
            <img src={MyPicture} id='myPicture'/>
=======
            <button id='contactMeButton'>Contact me</button>
>>>>>>> f72406dcf8a76409e4202357e1ad1025b88f4742
        </div>
    )
}

export default MiddleBox;