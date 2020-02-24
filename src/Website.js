import React from 'react';
import './Website.scss';
import MiddleBox from './components/middleBox'
import NavigationBar from './components/navigationBar';
import Projects from './components/projects'


function Website() {
  return (
    <div className="Website">
      <NavigationBar />
      <div className="websiteMiddle">
        <MiddleBox />
      </div>
        <Projects />
    </div>
  );
}

export default Website;
