import React from 'react';
import {Switch} from 'react-router-dom';
import {BaseRouting} from '../utils/permission';
import Admin from './views/admin';
import Home from './views/home';

const ADMIN = 0;

const Routes = () => (
    <Switch>
        <BaseRouting path = '/' exact component={Home}></BaseRouting>
        <BaseRouting path = '/admin' component = {Admin} ></BaseRouting>        
    </Switch>
);

export default Routes;