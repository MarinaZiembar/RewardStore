import React from 'react';
import { Modal } from 'react-bootstrap';
import ship from '../../assets/images/ship.svg';


function ModalSuccess(props) {

    const { showModal, handleHide } = props

    return(
        <div className="modal-success">
            <Modal 
                show={showModal} 
                onHide={handleHide}
                dialogClassName="modal-success"
            >
                <Modal.Body>
                    <img src={ship} width="140" alt="ship" />
                    <h2>All Hand Hoy!</h2>
                    <p>Your product's been redeemed successfully.</p>
                    <p>Keep huntin' more treasures!</p>
                    <button
                        onClick={handleHide}
                    >
                        CLOSE
                    </button>
                </Modal.Body>
            </Modal>
        </div>
    )
}


export default ModalSuccess;