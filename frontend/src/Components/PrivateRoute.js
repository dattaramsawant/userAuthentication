import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const accessToken = useSelector(state=>state?.user?.accessToken)
    const location = useLocation();
console.log('accessToken', accessToken)
    return (
        accessToken ? <Outlet /> : <Navigate to="/login" state={{from:location}} replace />
    )
}

export default PrivateRoute