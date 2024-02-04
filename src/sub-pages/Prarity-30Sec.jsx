// Parity.js
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import CountdownTimer from '../components/CoundownTimer';
import BetModal from '../components/BetModel'; // Import the new BetModal component
import { Link , useNavigate} from 'react-router-dom';
import ColorBoll from '../components/ColorBoll';
import BalanceApiSlice from '../slices/BalanceApiSlice';
const Parity = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const [balance, setBalance] = useState(0);
    const [successMsg, setSuccessMsg] = useState("");
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                if (!userInfo) {
                    navigate('/login');
                } else {
                    // Make API call to fetch balance
                    const response = await BalanceApiSlice.checkBalance(userInfo);
                    setBalance(response.balance);
                }
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };
    
        fetchBalance();
    }, [userInfo, navigate]);

    const combination = [
        {
            number: 0,
            color:"Blue"
        },
        {
            number: 1,
            color:"Green"
        },
        {
            number: 2,
            color:"Red"
        },
        {
            number: 3,
            color:"Green"
        },
        {
            number: 4,
            color:"Red"
        },
        {
            number: 5,
            color:"Blue"
        },
        {
            number: 6,
            color:"Red"
        },
        {
            number: 7,
            color:"Green"
        },
        {
            number: 8,
            color:"Red"
        },
        {
            number: 9,
            color:"Green"
        },
    ]
    
    const handleShow = (color) => {
        setSelectedColor(color);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const handleConfirmBet = async (color, betAmount) => {
        // Handle the logic for confirming the bet
        console.log(betAmount, balance)
        if (betAmount > balance) {
            setSuccessMsg("Insufficient balance");
        } else {
            setSuccessMsg(`₹${betAmount} Successfully`);
            const res1 = await BalanceApiSlice.updateBalance({ mobileNumber: userInfo.mobileNumber, balance: balance - betAmount });
            setBalance(res1.balance);
        }
        // For example, you can update the state or make an API call
        console.log(`Betting on ${color} with amount ₹${betAmount}`);

    };
    const timeoutId = setTimeout(() => {
        setSuccessMsg(""); // Remove the last message
    }, 1000);
    return (
        <div className="d-flex flex-column min-vh-100">
            <header className="bg-primary text-white p-3 fixed-top w-100">
                <div className="row">
                    <div className="col">
                        <Link to={'/home'}><MdArrowBackIos className="text-white" style={{ height: "30px", width: "30px" }} /></Link>
                        <span className='ml-2 text-dark mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}>Parity</span>
                    </div>
                    <div className="col text-right mt-1"><b>Rule</b></div>
                </div>
            </header>
            <main className='flex-grow-1 p-3 mt-5'>
                {/* ... (rest of your component) */}
                <CountdownTimer time={"1000"} timeinsec={"30"}/>
                <div className="row text-center pt-1 ">
                    <div className="col-1"></div>
                    <div onClick={() => { handleShow('Red'); }} className="col-3 bg-danger ml-2 rounded p-2 text-white card" style={{ fontWeight: "bold" }}>
                        Join
                        <br />Red
                    </div>
                    <div onClick={() => { handleShow('Blue'); }} className="col-3 bg-primary ml-2 mr-2 rounded p-2 text-white card" style={{ fontWeight: "bold" }}>
                        Join
                        <br /> Blue
                    </div>
                    <div onClick={() => { handleShow('Green'); }} className="col-3 bg-success rounded p-2 text-white card" style={{ fontWeight: "bold" }}>
                        Join
                        <br /> Green
                    </div>
                </div>
                <div className="row p-2 align-items-center ml-3 mt-2" style={{ fonrWeight: "bold" }}>
                    <div className="col-2 bg-light mr-1 text-center ml-1 p-1"><b>0</b></div>
                    <div className="col-2 bg-light mr-1 text-center p-1"><b>1</b></div>
                    <div className="col-2 bg-light mr-1 text-center p-1"><b>2</b></div>
                    <div className="col-2 bg-light mr-1 text-center p-1"><b>3</b></div>
                    <div className="col-2 bg-light mr-1 text-center p-1"><b>4</b></div>
                </div>
                <div className="row pl-2 pr-2 mb-2 align-items-center ml-3" style={{ fonrWeight: "bold" }}>
                    <div className="col-2 bg-light mr-1 text-center ml-1 p-1"><b>5</b></div>
                    <div className="col-2 bg-light mr-1 text-center p-1"><b>6</b></div>
                    <div className="col-2 bg-light mr-1 text-center p-1"><b>7</b></div>
                    <div className="col-2 bg-light mr-1 text-center p-1"><b>8</b></div>
                    <div className="col-2 bg-light mr-1 text-center p-1"><b>9</b></div>
                </div>
                {successMsg
                    &&
                    <div className="text-white bg-dark p-1 text-center rounded"
                    >
                        {successMsg}
                    </div>}
                <div className='row p-2 pb-4' style={{ borderTop: "15px solid gray", borderBottom: "15px solid gray" }}>
                    <div className="col">
                        <b>Record's</b>
                        <br />
                        <br />
                        <ColorBoll color="danger" number="2"/>
                        <ColorBoll color="success" number="1"/>
                        <ColorBoll color="danger" number="2"/>
                        <ColorBoll color="primary" number="0"/>
                        <ColorBoll color="danger" number="2"/>
                        <ColorBoll color="success" number="1"/>
                        <ColorBoll color="success" number="3"/>
                        <ColorBoll color="primary" number="0"/>
                        <br />
                        <br />
                        <ColorBoll color="danger" number="2"/>
                        <ColorBoll color="success" number="1"/>
                        <ColorBoll color="danger" number="2"/>
                        <ColorBoll color="danger" number="2"/>

                    </div>
                </div>
                <div className='row text-center bg-light'>
                    <div className="col p-2 rounded" style={{borderRight:"5px solid blue", borderBottom:"5px solid blue"}}>Everyone's order</div>
                    <div className="col p-2 rounded" style={{borderBottom:"5px solid blue", borderLeft:"5px solid blue"}}>Your order</div>
                </div>
            </main>

            {/* Render the BetModal component */}
            <BetModal
                showModal={showModal}
                handleClose={handleClose}
                color={selectedColor}
                onConfirm={handleConfirmBet}
                balance={balance}
            />
        </div>
    );
};

export default Parity;
