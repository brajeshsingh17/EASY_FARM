import React from 'react';
import { isUserAuth } from '../modules/selectors/auth';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AuthRoute = ({ children }) => {
    const isAuth = useSelector(isUserAuth);
    return isAuth ? <Redirect to='/home' /> : children;
}

export default AuthRoute;