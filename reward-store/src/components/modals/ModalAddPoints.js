
import React from 'react';
import { Modal } from 'react-bootstrap';
import { addPoints } from '../../utils/AddPoints';
import AddPointsCard from '../cards/AddPointsCard';



function ModalAddPoints(props) {

    const { handleOnShow, show, handleOnCardClick } = props

    return(
        <div className="modal-add-points">
            <Modal 
                show={show} 
                onHide={handleOnShow}
                size="lg"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h2>Get yourself some free Gems!</h2>
                    <div className="cards-container">
                        {
                            addPoints.map((point,i) => (
                                <AddPointsCard
                                    img={point.img}
                                    label={point.label}
                                    width={point.width}
                                    text={point.text}
                                    value={point.value}
                                    handleOnClick={handleOnCardClick} 
                                    key={i}
                                />
                            ))
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}


export default ModalAddPoints;