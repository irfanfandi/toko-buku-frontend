import React from 'react'
import Register from './Register'
import axios from 'axios'
import {Redirect } from 'react-router-dom';


const RegisterApp = () => {

    const onSubmit = async (name, email, password) => {
        const request = await axios.post('http://localhost:3000/users', {
          name,
          email,
          password,
          role : "Customer",
        })
        const data = request.data
        if (data <= 0) {
          alert('Regiter Gagal')
          localStorage.setItem('stsRegister', 'false')
        }else{
          alert('Register Sukses')
          localStorage.setItem('stsRegister', 'true')
        }
      }

      if(localStorage.getItem('stsRegister')==='false' || localStorage.getItem('stsRegister')===null){
        return <Register onAdd = {onSubmit}/>
        }    
      return (
        <Redirect to="/auth/login" />
      )

    }

export default RegisterApp;
