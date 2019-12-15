// import React from 'react';
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import Myitem from './myItem';
import './Home.css';

function Home() {
  const [books, setBooks] = useState([]);


  async function addToCart( idPurchaseA, id_book, QTY, price, createdBy) {
    await axios.post('http://localhost:3000/purchase_b',{
      id_user : '1',
      id_book : id_book,
      qty : QTY,
      price : price,
      ceated_by : createdBy
    });
    console.log(price);
  }

  async function fetchData() {
    const request = await axios.get('http://localhost:3000/books')
    const data = request.data
    setBooks(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
  <div>
    <div className="row navbar ">
      <div className="col s12 m11 push-m1">
        <div className="col m4 s7 belbuk">Beli Buku</div>
        <div className="col m2 s5 push-m4">
          <NavLink to="/login" className="waves-effect waves-light btn blue right">
            Login <i className="material-icons right">person_pin</i>
          </NavLink>
          <NavLink to="/cart" className="waves-effect waves-light btn-floating orange">
            <i className="material-icons right">shopping_cart</i>
          </NavLink>
        </div>
        <div className="col m6 s12 pull-m4">
          <input type="text" placeholder="Search" id="mySearch" className="col s12"/>
        </div>
      </div>
    </div>
    <div className="row isi">
      <div className="col s12 m10 push-m1">
        {books.map((book, index)=>(
          <Myitem judul={book.nm_book} harga={book.price} idBuku={book._id} addToCart={addToCart} key={index}/> 
        ))}
        {/* <Myitem mId="mo1" judul="judul1" sinops="Uveeveve uevn euvsvus"/> 
        <Myitem mId="mo2" judul="judul2" sinops="Udafdsg sdab us"/> 
        <Myitem mId="mo3" judul="judul3" sinops="Udagdav sgsfdbf fsus"/> 
        <Myitem mId="mo4" judul="judul1" sinops="Uveeveve uevn euvsvus"/> 
        <Myitem mId="mo5" judul="judul2" sinops="Udafdsg sdab us"/> 
        <Myitem mId="mo6" judul="judul3" sinops="Udagdav sgsfdbf fsus"/> 
        <Myitem mId="mo7" judul="judul1" sinops="Uveeveve uevn euvsvus"/> 
        <Myitem mId="mo8" judul="judul2" sinops="Udafdsg sdab us"/> 
        <Myitem mId="mo9" judul="judul3" sinops="Udagdav sgsfdbf fsus"/>  */}
      </div>
      
    </div>
  </div>
  );
}

export default Home;
