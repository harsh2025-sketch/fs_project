import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ProtectedRoute = ({ children }) => {
    const { isLoggedin } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedin) {
            navigate('/login');
        }
    }, [isLoggedin, navigate]);

    return isLoggedin ? children : null;
}

export default ProtectedRoute
