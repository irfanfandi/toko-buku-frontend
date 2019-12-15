// import React from "react";
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'
import Cartitem from "./cartItem";
import "./cart.css";

function Cart() {
  const [carts, setCarts] = useState([]);
  const [address, setAddress] = useState('')
  const [purcaseA, setPurcase] = useState([])

  async function getBookName(idBook) {
    const request = await axios.get(`http://localhost:3000/books/${idBook}`);
    const data = request.data
    console.log(data);
  }
  

  async function fetchData() {
    let idUser="1";
    const request = await axios.get(`http://localhost:3000/purchase_b/${idUser}`)
    const data = request.data
    setCarts(data)
  }

  async function editQTY(QTY,idPurchase,Price) {

    await axios.put(`http://localhost:3000/purchase_b/${idPurchase}`,{
      qty : QTY,
      total_price : (Price*QTY)
    });
    
  }


  async function handleAddAddress() {

    let idUser="1";
    let totalHarga=0;

    const request = await axios.get(`http://localhost:3000/purchase_b/${idUser}`)
    const data = request.data
    setCarts(data)
    carts.map((cart, index) => (
      totalHarga+=cart.total_price
    ));

    await axios.post(`http://localhost:3000/purchase_a`,{
      id_user : idUser,
      shipping_address : address,
      total_price : totalHarga
    });

    const request2 = await axios.get(`http://localhost:3000/purchase_a/${idUser}`);
    const data2 = request2.data
    setPurcase(data2);
    let idPurcaseA=0;
    // idPurcaseA=purcaseA._id;
    purcaseA.map((purc, index) => (
      idPurcaseA=purc._id
    ));
    
    
    await axios.put(`http://localhost:3000/purchase_b/${idUser}`,{
      id_purchase_a : idPurcaseA
    })
      console.log(idPurcaseA)
    

    

  }


  useEffect(() => {
    fetchData()
  }, [])

  

  return (
    <div>
      <div className="row navbar ">
        <div className="col s12 m11 push-m1">
          <NavLink to="/auth/logout" className="col m4 s7 belbuk">
            Beli Buku
          </NavLink>
        </div>
      </div>
      <div className="listCart row">
        <ul className="collection col s12 m10 push-m1">
          <li className="row collection-item">
            <div className="col s2" >Foto</div>
            <div className="col s5" >Judul</div>
            <div className="col s2" >Harga</div>
            <div className="col s1" >QTY</div>
            
          </li>
          {carts.map((cart, index) => (
            <Cartitem 
              judul={cart.id_book} 
              foto={cart.foto} 
              harga={cart.price} 
              totalHarga={cart.total_price} 
              purchase={cart._id} 
              editQty={editQTY} 
              idItem={index} 
              qty={cart.qty} 
              key={index}/>
          ))}
          
        </ul>
        <div className="row col s12 m11 push-m1">
          <div className="col s8">
            <input value={address} placeholder="Address" type="text" onInput={e => setAddress(e.target.value)}/>
          </div>
          <div className="col s4">
            <div className="col s2"><div className="btn" onClick={() => handleAddAddress()} >Save</div></div>
          </div>
        </div>
        
      </div>
      
      
    </div>
  );
}

export default Cart;
