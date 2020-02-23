import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Website from './Website';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
<Router>
    <Website />
</Router>
, document.getElementById('root')); 


