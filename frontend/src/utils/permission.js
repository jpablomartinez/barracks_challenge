import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export const hasPermission = (roles = []) => {
    if(roles.length > 0){
        const user_type = jwt_decode(window.localStorage.getItem('token'));
        return roles.includes(user_type);
    }
    return true;
}

export const BaseRouting = ({component: Component, roles, redirect, ...rest}) => {
    return (
        <>
          {
            hasPermission(roles) && (
                <Route {...rest}
                    render = {(props) => (
                        <>
                        <Component {...props} />
                        </>  
                    )}
                />  
          )}
          {
            !hasPermission(roles) && (
                <Route 
                    render = {() => (
                        <>
                            <Redirect to = {redirect} />
                        </>    
                    )}
                />    
            )
          }
        </>  
    )
}
