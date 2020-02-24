import React from 'react';
import './styles/middleBox.scss'

const MiddleBox = () => {
    return (
        <div className='middleBox'>
            <h3 id='myName'>My name is Jerry Osorio Pagan</h3>
            <h1 id='description'>I am a Full Stack Web Developer from Puerto Rico.</h1>
            <p id='otherDescription'>
            I am a Full Stack Web Developer from Lambda School, I have become very passionate about being a developer, 
            there is this satisfying feeling in, creating out of nothing, something that can solve real-life problems and make a change, one keystroke at a time.
                <p id='quote'>“First, solve the problem. Then, write the code.”</p>
            </p>
            <button id='contactMeButton'>Contact me</button>
        </div>
    )
}

export default MiddleBox;