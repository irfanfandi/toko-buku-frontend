// import React from "react";
import axios from 'axios'
import React, {useState} from 'react'

function Cartitem(props) {

  const [qty, setQty] = useState(props.qty)

  const handleAddQty = (idPurchase,price) => {
    props.editQty(qty,idPurchase,price)
    // console.log(qty);
    setQty(qty)
  }
  
  return (
    <div className="row  collection-item" >
      <div className="col s2"><img src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png"/></div>
      <div className="col s5">{props.judul}</div>
      <div className="col s2">{props.harga}</div>
      <div className="col s1">
        <input value={qty} type="number" onChange={e => setQty(e.target.value)}/>
        {/* <input value={props.purchase} type="hidden" onChange={e => setQty(e.target.value)}/> */}
      </div>
      <div className="col s2"><div className="btn" onClick={() => handleAddQty(props.purchase,props.harga)} >Save</div></div>
    </div>
  );
}

export default Cartitem;
