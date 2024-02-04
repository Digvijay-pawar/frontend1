import React from 'react';
import { MdGroupAdd} from 'react-icons/md';
import { Link } from 'react-router-dom';
import NavigationFooter from '../components/NavigationFooter';
const Invite = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <header className="bg-primary text-white p-3 fixed-top w-100">
                <div className="row">
                    <div className="col">
                        <MdGroupAdd className="text-white" style={{ height: "30px", width: "30px" }} />
                        <span className='ml-2 text-dark mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}>Invite</span>
                    </div>
                </div>
            </header>
            <main className='flex-grow-1 p-3 mt-5'>
                {/* Withdraw Container*/}
                <div className="row mt-2 m-1 p-2 rounded" style={{backgroundColor:"azure"}}>
                  <div className="col">
                    <small><b className='text-dark'>Agent amount</b></small>
                    <br />
                    <span className='text-dark' style={{ fontSize: "20px" }}><b>₹1000.00</b></span>
                  </div>
                  <div className="col">
                    <button className='btn btn-dark mt-2'>Withdraw</button>
                  </div>
                </div>
                {/* Links */}
                <div className="row p-2 mt-2 mb-2 text-center text-primary" style={{fontWeight:"bold"}}>
                  <div className="col" style={{borderRightWidth:"1px",borderRightStyle:"solid"}}>
                    Privilege
                  </div>
                  <div className="col">
                    <Link to={'/invite-link'}>Invite Link</Link>
                  </div>
                </div>
                <div className="row p-2 text-center" style={{borderTopWidth:"15px",borderTopStyle:"solid", borderBottomWidth:"15px",borderBottomStyle:"solid", borderBlockColor:"silver"}}>
                  <div className="col" style={{borderRightWidth:"1px",borderRightStyle:"solid"}}>
                    Invited Today <br />
                    <span className='text-dark' style={{ fontSize: "20px" }}><b>10</b></span>
                    <br />
                    <small className='text-dark'>Total: 0</small>
                  </div>
                  <div className="col">
                    Today's Income <br />
                    <span className='text-dark' style={{ fontSize: "20px" }}><b>₹0.00</b></span>
                    <br />
                    <small className='text-dark'>Total: ₹0.00</small>
                  </div>
                </div>
                <div className="row" style={{fontWeight:"bold"}}>
                  <div className="col">Records</div>
                  <div className="col text-right">more &gt;</div>
                </div>
                <div className='row pt-5'>
                  <div className="col text-center">
                    No Records
                  </div>
                </div>
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

export default Invite;
