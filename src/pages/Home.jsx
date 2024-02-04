import React, { useState, useEffect } from 'react';
import NavigationFooter from '../components/NavigationFooter';
import { MdEmojiEvents, MdCheck } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BalanceApiSlice from '../slices/BalanceApiSlice'
import io from 'socket.io-client';
function Home() {
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);
    const [balance, setBalance] = useState(0);

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
    

    return (
        <div className='d-flex flex-column min-vh-100'>
            <header className="bg-primary text-white p-3 fixed-top w-100">
                <div className="row">
                    <div className="col">
                        <svg viewBox="0 0 1024 1024" className="" style={{ height: "30px", width: "30px" }}>
                            <path
                                d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"
                                className=""
                            >
                            </path>
                        </svg>
                        <span className='ml-2 text-dark mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}>Home</span>
                    </div>
                </div>
            </header>
            <main className="flex-grow-1 p-3 mt-5 mb-5">
                {/* Balance container */}
                <div className="row homeBalance p-2">
                    <div className="col">
                        <span className='text-secondary'><b>Balance</b></span>
                        <br />
                        <span className='text-dark' style={{ fontSize: "20px" }}><b>₹{balance}</b></span>
                        <br />
                        <span className='text-secondary' style={{ fontSize: "15px" }}><small><b>ID:{userInfo.userID}</b></small></span>
                    </div>
                    <div className="col text-center">
                        <button onClick={() => navigate('/recharge')} className='btn btn-outline-primary mb-1'>Recharge</button>
                        <br />
                        <button onClick={() => navigate('/withdraw')} className='btn btn-success'>Withdraw</button>
                    </div>
                </div>
                {/*Reward and check in*/}
                <div className="row ml- p-2 pl-4" style={{ fontSize: "15px" }}>
                    <div className="col text-success" onClick={() => navigate('/task-reward')}>
                        <MdEmojiEvents size={20} className="mr- align-self-center" /><b>Task Reward</b>
                    </div>
                    <div className="col text-danger text-center">
                        <MdCheck size={20} className="mr- align-self-center" /><b>Check In</b>
                    </div>
                </div>
                {/*banner*/}
                <div className='row mt-1 mb-1'>
                    <div className="col-12 p-4 mb-1 shadow bg-white rounded border-0">
                        <b>Task Reward</b>
                    </div>
                </div>
                {/*Parity Tabs*/}
                <div className="row p-2">
                    <div onClick={() => navigate('/parity-30')} className="col-6 p-4 mb-1 overflow-auto  shadow rounded border-0 text-center" style={{ backgroundImage: `url(${require('../assets/fast-parity.jpg')})`, backgroundSize: "cover", height: "175px" }}>
                    </div>
                    <div onClick={() => navigate('/parity-1')} className="col-6 p-4 mb-1 shadow rounded border-0 text-center" style={{ backgroundImage: `url(${require('../assets/parity1.jpg')})`, backgroundSize: "cover" }}> </div>
                    <div onClick={() => navigate('/parity-2')} className="col-6 p-4 mb-5 shadow rounded border-0 text-center" style={{ backgroundImage: `url(${require('../assets/sapre.jpg')})`, backgroundSize: "cover", height: "175px" }}>
                    </div>
                    <div onClick={() => navigate('/parity-3')} className="col-6 p-4 mb-5 shadow rounded border-0 text-center" style={{ backgroundImage: `url(${require('../assets/parity.jpg')})`, backgroundSize: "cover", height: "175px" }}>
                    </div>
                </div>
            </main>
            {/* Navigation tabs */}
            <footer className="bg-primary text-white text-center p-3 fixed-bottom w-100">
                <div className="row text-dark" style={{ fontWeight: "bold" }}>
                    <div className="col">
                        <NavigationFooter tabName="Home"></NavigationFooter>
                    </div>
                    <div className="col">
                        <NavigationFooter tabName="Invite"></NavigationFooter>
                    </div>
                    <div className="col">
                        <NavigationFooter tabName="Recharge"></NavigationFooter>
                    </div>
                    <div className="col">
                        <NavigationFooter tabName="My"></NavigationFooter>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
