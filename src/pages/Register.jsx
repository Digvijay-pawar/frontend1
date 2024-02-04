import React, { useState, useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/UserApiSlice';
import { setCredentials } from '../slices/AuthSlice';

const Register = () => {

    const [formData, setFormData] = useState({
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        otp: '',
        inviteCode: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [register, { isLoading }] = useRegisterMutation();
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
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { mobileNumber, password, confirmPassword, inviteCode } = formData;
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        }else{
            const res = register({ mobileNumber, password, inviteCode }).unwrap();
            dispatch(setCredentials({...res}));
            navigate('/home');
        }
    };

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
                        <span className='ml-2 text-dark mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}>Create Account</span>
                    </div>
                </div>
            </header>
            <main className="flex-grow-1 p-3 overflow-auto" style={{ marginTop: "20px" }}>
                <div className="game-logo mb-1 text-center mt-5">
                    <h1><b><i>Digvijay</i></b></h1>
                </div>
                <form className="mt-3" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="tel" className='form-control p-4' onChange={handleChange} value={formData.mobileNumber} name='mobileNumber' placeholder='Mobile Number' style={{ outline: 'none', fontWeight: "bold" }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className='form-control p-4' onChange={handleChange} value={formData.password} name='password' placeholder='Create Password' style={{ outline: 'none', fontWeight: "bold" }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className='form-control p-4' onChange={handleChange} value={formData.confirmPassword} name='confirmPassword' placeholder='Confirm Password' style={{ outline: 'none', fontWeight: "bold" }} />
                    </div>
                    <div className='row'>
                        <div className="col form-group">
                            <input type="text" className='form-control p-4' onChange={handleChange} value={formData.otp} name='otp' placeholder='OTP' style={{ outline: 'none', fontWeight: "bold" }} />
                        </div>
                        <div className="col form-group">
                            <button type="button" className='btn btn-primary form-control' style={{ verticalAlign: "middle", height: "50px" }}><b>Send OTP</b></button>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-control p-4' onChange={handleChange} name='inviteCode' value={formData.inviteCode} placeholder='Invite Code' style={{ outline: 'none', fontWeight: "bold" }} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className='btn btn-primary form-control'> <b>Create Account</b> </button>
                    </div>
                    <div className="form-group text-center">
                        <b>Already have an account?</b> <b className='text-primary text-decoration-underline'><Link to='/login'>Login</Link></b>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Register;
