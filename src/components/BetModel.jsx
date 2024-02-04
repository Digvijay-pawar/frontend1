// BetModal.js

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const BetModal = ({ showModal, handleClose, color, onConfirm, balance}) => {
    const [betAmount, setBetAmount] = useState(10);
    const [contractMoney, setContractMoney] = useState(10);
    const handleBetAmountChange = (amount) => {
        // Ensure that the new betAmount is never less than 0
        const newBetAmount = Math.max(betAmount + amount, 0);
        setBetAmount(newBetAmount);
    };

    const handleConfirm = () => {
        // Add logic here to check if the betAmount exceeds the balance
        if (betAmount > balance) {
            console.log("Insufficient balance");
        } else {
            // If it doesn't, call the onConfirm function with the color and betAmount
            onConfirm(color, betAmount);
        }
        // Close the modal
        handleClose();
        setBetAmount(10);
        setContractMoney(10);
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Bet on {color}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Modal content (similar to what you had) */}
                <div className="row pt-2 pb-2" style={{ background: "azure" }}>
                    <div className="col">
                        <span className='rounded m-1' style={{ fontSize: "18px", verticalAlign: "middle" }}><b>₹{balance}</b></span>
                    </div>
                    <div className='col'>
                        <button className='btn btn-success'><b>Recharge</b></button>
                    </div>
                </div>
                <div className="row mt-1">
                    <b>Contract money</b>
                </div>
                <div className="row text-center" style={{ fontWeight: "bold" }}>
                    <div className="col-2 mr-1 ml-3 mt-2 bg-light card p-1" onClick={() => [setBetAmount(10), setContractMoney(10)]}>10</div>
                    <div className="col-2 mr-1 bg-light mt-2 card p-1" onClick={() => [setBetAmount(100), setContractMoney(100)]}>100</div>
                    <div className="col-3 mr-1 bg-light mt-2 card p-1" onClick={() => [setBetAmount(1000), setContractMoney(1000)]}>1000</div>
                    <div className="col-3 mr-1 bg-light mt-2 card p-1" onClick={() => [setBetAmount(10000), setContractMoney(10000)]}>10000</div>
                </div>

                <div className="row mt-1">
                    <b>Number</b>
                </div>
                <div className="row text-center mb-1" style={{ fontWeight: "bold" }}>
                    <button className="col-2 mr-1 mt-2 bg-light card p-1 cursor-pointer text-center" onClick={() => handleBetAmountChange(-contractMoney * 5)}><b>-5</b></button>
                    <button className="col-2 bg-light mt-2 card cursor-pointer p-1" onClick={() => handleBetAmountChange(-contractMoney)}><b>-1</b></button>
                    <button className="col-3 mt-2 cursor-pointer"><big><b className='text-danger'>{betAmount}</b></big></button>
                    <button className="col-2 mr-1 bg-light mt-2 card p-1" onClick={() => handleBetAmountChange(contractMoney * 1)}><b>+1</b></button>
                    <button className="col-2 bg-light mt-2 card p-1" onClick={() => handleBetAmountChange(contractMoney * 5)}><b>+5</b></button>
                </div>
                <h6><b className='text-danger'>Total Bet Money is ₹{betAmount}</b></h6>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleConfirm}>
                    <b>Confirm</b>
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BetModal;
