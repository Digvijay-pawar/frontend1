import React from 'react';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavigationFooter from '../components/NavigationFooter';
const Recharge = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white p-3 fixed-top w-100">
        <div className="row">
          <div className="col">
            <MdAccountBalanceWallet size={25} />
            <span className='ml-2 text-dark mt-3' style={{ fontSize: "18px", fontWeight: "bold" }}>Recharge</span>
          </div>
          <div className="col text-right mt-1 text-light">
            <b onClick={() => navigate('/recharge-records')}>Records</b>
          </div>
        </div>
      </header>
      <main className='flex-grow-1 p-3 mt-5'>
        <div className="row mt-3">
          <div className="col text-center">
            <span><b><big>Balance</big></b></span>
            <br />
            <span className='text-dark' style={{ fontSize: "35px" }}><b>₹110.00</b></span>
          </div>
        </div>
        <div className='row'>
          <div className="col">
            <big><b>Amount</b></big>
            <br />
            <div className="row">
              <div className="col-2">
                <span style={{ fontSize: "50px" }}><b>₹</b></span>
              </div>
              <div className="col">
                <input type="text" className='form-control mt-3' style={{height:"50px", border:"none", borderBottomWidth:"1px", borderBottomStyle:"solid", fontSize:"40px", fontWeight:"bold", borderRadius:"none"}}/>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-3 pt-4">
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹500</h5> </div>
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹1000</h5> </div>
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹1500</h5> </div>
        </div>
        <div className="row pr-3 pl-3">
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹500</h5> </div>
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹1000</h5> </div>
          <div className="col bg-secondary text-white p-2 text-center mr-1" style={{fontWeight:"bold"}}> <h5 className='mt-1'>₹1500</h5> </div>
        </div>
        <button className='btn btn-primary btn-block mt-2' style={{marginBottom:"50px"}}><b>Recharge</b></button>
      </main>
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
};

export default Recharge;
