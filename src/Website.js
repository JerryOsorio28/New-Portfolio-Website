import React from 'react';
import './Website.scss';
import MiddleBox from './components/middleBox'
import NavigationBar from './components/navigationBar';
import Projects from './components/projects'


const Website = props => {
  return (
    <div className="Website">
      <NavigationBar />
      <div className="websiteMiddle">
        <MiddleBox />
      </div>
        <Projects props={props}/>
    </div>
  );
}

export default Website;
