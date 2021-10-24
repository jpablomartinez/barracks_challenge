import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {BaseRouting} from '../utils/permission';
import Login from '../views/login';
import Register from './views/register';
import Admin from './views/admin';
import Home from './views/home';

const ADMIN = 0;

const Routes = () => (
    <Switch>
        <BaseRouting path = '/' exact component={Home}></BaseRouting>
        <BaseRouting path = '/admin' component = {Admin} roles = {ADMIN}></BaseRouting>        
    </Switch>
);

module.exports = {
    Routes
}