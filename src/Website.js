import React from 'react';
import MiddleBox from './components/middleBox'
import NavigationBar from './components/navigationBar';
import Projects from './components/projects'
<<<<<<< HEAD
import Contact from './components/contact';
=======
>>>>>>> f72406dcf8a76409e4202357e1ad1025b88f4742
import MyPicture from '../src/images/portfolio-picture.png'

//STYLES
import './Website.scss';


const Website = props => {

  return (
    <div className="Website">
      <NavigationBar />
      <div className="websiteMiddle">
        <MiddleBox />
      </div>
        <Projects props={props}/>
<<<<<<< HEAD
        <Contact />
=======
>>>>>>> f72406dcf8a76409e4202357e1ad1025b88f4742
        <img src={MyPicture} id='myPicture'/>
    </div>
  );
}


export default Website;
