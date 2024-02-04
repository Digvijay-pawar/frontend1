import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/UserApiSlice';
import { setCredentials } from '../slices/AuthSlice';

const Login = () =>  {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        password: ''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/home');
        }
    }, [navigate, userInfo]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { mobileNumber, password } = formData;
        try{
            const res = await login({mobileNumber, password}).unwrap();
            dispatch(setCredentials({...res}));
            navigate('/home');
        }catch(err){
            console.log(err);
        }
    }

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
                        <span className='ml-2 text-dark mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}>Login</span>
                    </div>
                </div>
            </header>
            <main className="flex-grow-1 p-3 overflow-auto" style={{ marginTop: "20px" }}>
                <div className="game-logo mb-1 text-center mt-5">
                    <h1><b><i>Digvijay</i></b></h1>
                </div>
                <form action="" className="mt-3" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="telephone" className='form-control p-4' onChange={handleChange} value={formData.mobileNumber} name='mobileNumber' placeholder='Mobile Number' style={{ outline: 'none', fontWeight: "bold" }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className='form-control p-4' onChange={handleChange} value={formData.password} name='password' placeholder='Create Password' style={{ outline: 'none', fontWeight: "bold" }} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className='btn btn-primary form-control'> <b>Login</b> </button>
                    </div>
                    <div className="form-group text-center">
                        <b>Don't have an account?</b> <b className='text-primary text-decoration-underline'><Link to={'/register'}>Register</Link></b>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Login;