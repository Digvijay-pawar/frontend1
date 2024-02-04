import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import NavigationFooter from '../components/NavigationFooter';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/UserApiSlice';
import {logout} from '../slices/AuthSlice'
import { useDispatch, useSelector } from 'react-redux';
const My = () => {
    const navigate = useNavigate();
    const {userInfo} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const [logoutApiCall] = useLogoutMutation();
    const logoutHandler = async (e) => {
        e.preventDefault();
        try{
            console.log("logging out");
            const res = await logoutApiCall().unwrap();
            dispatch(logout());
            console.log(res);
            navigate('/login');
        }catch(err){
            console.log(err);
        }

    }
    return (
        <div className="d-flex flex-column min-vh-100">
            <header className="bg-primary text-white p-3 fixed-top w-100">
                <div className="row">
                    <div className="col">
                        <MdAccountCircle className="text-white" style={{ height: "30px", width: "30px" }} />
                        <span className='ml-2 text-dark mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}>Account Details</span>
                    </div>
                </div>
            </header>
            <main className='flex-grow-1 p-3 mt-5'>
                <div className="row p-2 m-1 mt-2 rounded" style={{ background: "azure" }}>
                    <div className="col-2 borde p-0">
                        <MdAccountCircle className="text-dark" style={{ height: "50px", width: "50px" }} />
                    </div>
                    <div className="col">
                        <span><big><b>{userInfo.mobileNumber}</b></big></span>
                        <br />
                        <span className='text-dark' style={{ fontSize: "15px" }}>ID: {userInfo.userID}</span>
                        <button className='btn mt-2 btn-outline-dark btn-block'>Change Password</button>
                    </div>
                </div>
                <div className="row m-2  mt-4">
                    <div className="col-8">Financial Details</div>
                    <div className="col text-right">></div>
                </div>
                <hr className='m-2' />
                <div className="row m-2  mt-4">
                    <div className="col-8">Order History</div>
                    <div className="col text-right">></div>
                    
                </div>
                <hr className='m-2' />
                <div className="row m-2  mt-4">
                    <div className="col-8">Download</div>
                    <div className="col text-right">></div>
                </div>
                <hr className='m-2' />
                
                <div className="row m-2  mt-4">
                    <div className="col-8">Contact Us</div>
                    <div className="col text-right">></div>
                </div>
                <hr className='m-2' />
                
                <div className="row m-2  mt-4">
                    <div className="col-8">Follow Us</div>
                    <div className="col text-right">></div>
                </div>
                <hr className='m-2' />
                <div className="row">
                    <div className="col text-center">
                        <a href="" onClick={logoutHandler}>Logout</a>
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

export default My;
