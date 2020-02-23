import React from 'react';
import './Website.scss';
import MiddleBox from './components/middleBox'
import NavigationBar from './components/navigationBar';


function Website() {
  return (
    <div className="Website">
      <NavigationBar />
      <MiddleBox />
    </div>
  );
}

export default Website;
