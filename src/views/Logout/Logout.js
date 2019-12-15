import React from 'react'
import {Redirect } from 'react-router-dom';



const logout = () => {

    function handleLogout(){
    localStorage.clear('login');
    localStorage.clear('userlogin');
    localStorage.clear('daftar');
    }
    return(
        <>
        <Redirect to="/auth/login" />
        {handleLogout()}  
        </>
    )
}
export default logout