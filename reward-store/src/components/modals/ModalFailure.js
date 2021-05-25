import React from 'react';
import { Modal } from 'react-bootstrap';
import  kraken from '../../assets/images/kraken.svg';



function ModalFailure(props) {

    const { showModal, handleHide } = props

    return(
            <Modal 
                show={showModal} 
                onHide={handleHide}
                dialogClassName="modal-failure"
            >
                <Modal.Body>
                    <img src={kraken} width="140" alt="kraken" />
                    <h2>Shiver Me Timbers!</h2>
                    <p>There's been an error while trying to redeem your product.</p>
                    <p>Maybe try again later, lad!</p>
                    <button
                        onClick={handleHide}
                    >
                        CLOSE
                    </button>
                </Modal.Body>
            </Modal>
    )
}


export default ModalFailure;