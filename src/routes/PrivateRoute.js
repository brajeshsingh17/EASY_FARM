import React from 'react';
import { isUserAuth } from '../modules/selectors/auth';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector(isUserAuth);
    
    return isAuth ? children : <Redirect to='/login' /> ;
}

export default PrivateRoute;