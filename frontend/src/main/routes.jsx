import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Todo from '../todo/todo';
import About from '../about/about';

export default props => (
    <Router history={hashHistory}>
        <Router path='/todos' component={Todo}/>
        <Router path='/about' component={About}/>
        <Redirect from='*' to='/todos' />
    </Router>    
)