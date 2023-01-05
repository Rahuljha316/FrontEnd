
import jwt from 'jwt-decode';
import React from 'react';
import Home from './home';


const userDetails = () => {
        
    const token = localStorage.getItem('token')
    const decoded = jwt(token)
    const username = decoded['username']
    const email = decoded['email']

    

    return (
        {username,email}
    );

}

export default userDetails;