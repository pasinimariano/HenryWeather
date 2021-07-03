import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home.js';
import AboutUs from '../pages/AboutUs.js';
import SubmitForm from '../pages/SubmitForm.js';
import CityDetails from '../pages/CityDetails.js';


const RoutesWeb = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={AboutUs} />
            <Route exact path='/submit' component={SubmitForm} />
            <Route exact path='/city/:id' component={CityDetails} />
        </Switch>
    );
}

export default RoutesWeb;