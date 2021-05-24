import React from 'react';
import { Modal } from 'react-bootstrap';
import  kraken from '../../assets/images/kraken.svg';



function ModalFailure(props) {

    const { show, handleHide } = props

    return(
        <div className="modal-success">
            <Modal 
                show={show} 
                onHide={handleHide}
            >
                <Modal.Body>
                    <img src={kraken} alt="kraken" />
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
        </div>
    )
}


export default ModalFailure;