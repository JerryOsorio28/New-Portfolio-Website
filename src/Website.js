import React from 'react';
import './Website.scss';
import MiddleBox from './components/middleBox'
import NavigationBar from './components/navigationBar';
import Projects from './components/projects'
import Contact from './components/contact';
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
        <Contact />
        <img src={MyPicture} id='myPicture'/>
    </div>
  );
}


export default Website;
