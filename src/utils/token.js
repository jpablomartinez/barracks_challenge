import React from 'react';
import {Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const tokenExists = () => {
    return getToken() != null ? true : false;
}

export const getToken = () => {
    return window.localStorage.getItem('token');
}

export const setToken = (token) => {
    window.localStorage.setItem('token', JSON.stringify(token));
}

export const middleware = (Component) => {
    return tokenExists() ? <Component /> : <Redirect to = '/login' />
}

export const getUserData = () => {
    const token = getToken();
    const data = jwt_decode(token);
    return {
        firstname: data.user.firstname,
        user_type: data.user.type,
        log_id: data.user.log_id
    }
}

export const logout = () => {
    window.localStorage.removeItem('token');
    window.location.href = '/';
}
