import React from 'react'
import Login from './Login.jsx'
import axios from 'axios'
import {Redirect } from 'react-router-dom';



const loginApp = () => {

    const onSubmit = async (name,password) => {        
        const request = await axios.get(`http://localhost:3000/auth/${name}/${password}`,{        
        })
        const data = request.data
        if (data <= 0) {
            alert('Username & Password Tidak ditemukan')
            localStorage.setItem('login', 'false');
        }else{
            alert('Sukses Login')
            localStorage.setItem('login', 'true');
            localStorage.setItem('userLogin', JSON.stringify(data));
            localStorage.setItem('role', name);
        }
                
    }

    if(localStorage.getItem('login')==='true' && localStorage.getItem('role')==='Admin'){
        return <Redirect to="/admin/index" />
    }else if(localStorage.getItem('login')==='true' && localStorage.getItem('role')!=='Admin'){
        return <Redirect to="/admin/sasasas" />
    }else{
        return <Login onLogin = {onSubmit}/>
    }
}
export default loginApp