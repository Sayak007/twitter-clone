import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory
  } from "react-router-dom";

/**
 * Import all page components here
 */
import App from './App.js';
import Home from './Home.js';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Router>
    <Route exact path="/app" component={App}/>
    <Route exact path="/home" component={Home} />
    </Router>
);