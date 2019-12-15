import React from 'react';
import './myItem.css';


function myItem(proops) {

  function addCart (idPurchaseA, id_book, QTY, price, createdBy) {
    proops.addToCart(idPurchaseA, id_book, QTY, price, createdBy);
    console.log(id_book);
  }
    return (
      <div className="col l3 m3 s12 listBuku">
        <div className="col s12 buku">
            <div className="col s12">
                <img src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png"/>
            </div>
            <div className="col s12 detailBuku">
              <span  className="judulBuku">{proops.judul}</span><br/>
              <span  className="priceBuku"><i className="material-icons">attach_money</i>{proops.harga}</span><br/>
            </div>
            <div className="col s12">
              <div className="col s12 btn orange addToCart" onClick={ () => addCart(1,proops.idBuku,1,proops.harga,"Dandi Wibowo")}>Add to Cart</div>
            </div>
        </div>
      </div>
    );
  }
  
  export default myItem;