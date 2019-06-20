import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import './Main.css';

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/aboutus' component={AboutUs}/>
                <Route path='/contactus' component={ContactUs}/>
            </Switch>
        );
    }
}

export default Routes;
