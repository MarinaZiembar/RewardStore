import React from 'react';
import { Modal } from 'react-bootstrap';



function ModalSuccess(props) {

    const { show, hide } = props

    return(
        <div className="modal-success">
            <Modal 
                show={show} 
                onHide={hide}
            >
                <Modal.Body>
                    
                </Modal.Body>
            </Modal>
        </div>
    )
}


export default ModalSuccess;