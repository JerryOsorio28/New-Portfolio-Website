import React from 'react';
import MiddleBox from './components/middleBox'
import NavigationBar from './components/navigationBar';
import Projects from './components/projects'
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
        <img src={MyPicture} id='myPicture'/>
    </div>
  );
}

export default Website;
