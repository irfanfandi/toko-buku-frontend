import React from 'react'
import Login from './Login.jsx'
import axios from 'axios'
import { Redirect } from "react-router-dom";



const loginApp = () => {
        
    const renderRedirect = () => {
        // localStorage.setItem('login', 'true');        
        return <Redirect to='/admin/index' />
      }

    const onSubmit = async (name,password) => {        
        const request = await axios.get(`http://localhost:3000/auth/${name}/${password}`,{        
        })
        const data = request.data
        console.log(data);
        if (data <= 0) {
            alert('Username & Password Tidak ditemukan')
            localStorage.removeItem('login')
        }else{
            alert('Sukses Login')
            renderRedirect()
            console.log("sasasa");
        }
                
    }
    return(
            <Login onLogin = {onSubmit}/>
    )
}
export default loginApp