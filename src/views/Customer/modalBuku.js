import React from 'react';
import './modalBuku.css';


function myModals(proops) {
    return (
      <div>
        <div id={"mo"+proops.mId} className="modal">
            <div className="modal-content">
                <div className="modalHeader">
                    <h4>{proops.judul}</h4>
                    <p>{proops.harga}</p>
                </div>
                <div className="modalBody">
                    <p>{proops.sinops}</p>
                </div>
                <div className="btn orange">Add to cart</div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
      </div>
    );
  }
  
  export default myModals;