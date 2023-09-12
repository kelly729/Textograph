import React from "react";
import {MdCancel} from "react-icons/md";

export const Modal = ({selectedItem,closeModal}) => {

    console.log(selectedItem)
  
  return (
    <div className="modal-container">
        <div  className="modal">
            <div className="modal-image">
                <img src={selectedItem.src} alt="lellel"></img>
            </div>
            <div className="modal-content">
                <div className="modal-prompt">
                    <p>{selectedItem.prompt}</p>
                </div>
                <div className="modal-detailes">
                   <div>
                   <h4>model</h4>
                   <p>{selectedItem.model}</p>
                
                   <h4>Seed</h4>
                   <p>{selectedItem.seed}</p>
                   </div>


                   <div>
                   <h4>Guidance Scale</h4>
                   <p>{selectedItem.guidance}</p>
                
                   <h4>Dimentions</h4>
                   <p>{selectedItem.width} {selectedItem.height}</p>
                   </div>


                
                </div>
            </div>
        </div>
        <i onClick={closeModal}><MdCancel></MdCancel></i>
     
    </div>
  );
};
