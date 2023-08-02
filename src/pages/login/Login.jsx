import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../modules/reducer/authReducer';
import { GoogleLoginButton } from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

const Login = () => {

    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((pre) => ({
            ...pre,
            [name]: value
        }))
    }
    console.log(loginData);

    const clickedLogin = (e) => {
        e.preventDefault();
        dispatch(login({ data: loginData }));
    }
    const divStyles = {
        boxShadow: '1px 2px 5px #1A237E',
        margin: 'auto',
        padding: '1em',
        // height: '400px',
        height: '500px',
        width: '500px',
        marginTop: 25,
        textAlign: 'center'
    };
    const formFields = {
        boxShadow: '1px 2px 2px #1A237E',
        margin: '1em',
        padding: '1em',
    };
    const socialLogin = {
        margin: '2em',
        width: '90%',
        // align:'center + !important',
        // textAlign:'center + !important'
        // padding: '0.5em'
    };
    return (
        <div>
            <div style={divStyles}>
                <form onSubmit={clickedLogin}>
                    <div className="container">
                        <h2 style={{ color: '#2ccce4' }} className="text-3xl font-bold">Login</h2>
                        <div >
                            <input onChange={handleInputChange} value={loginData.email} name='email' type="email" placeholder="Email" style={formFields} />
                        </div>
                        <div >
                            <input onChange={handleInputChange} value={loginData.password} name='password' type="password" placeholder="Password" style={formFields} />
                        </div>
                        <div>
                            <button className="btn" type='submit' class="bg-gradient-to-r from-purple-400 to cyan-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6" >Login</button>
                        </div >
                        <div style={{ color: '#2ccce4' }} className="text-3xs"> <br />
                            Not a member? <Link to='/signup'>Sign-up </Link> here
                        </div>
                            {/* <p className="text-3xs font-bold" style={{ color: '#6c757d' }} >--------------------------OR                        --------------------------
                        </p> */}
                        <div style={socialLogin} >
                        <LoginSocialGoogle
                            client_id={"740475747942-qeobrtkln333lscnuc3smasib7ktauok.apps.googleusercontent.com"}
                            scope="openid profile email"
                            discoveryDocs="claims_supported"
                            access_type="offline"
                            onResolve={({ provider, data }) => {
                                console.log(provider, data);
                            }}
                            onReject={(err) => {
                                console.log(err);
                            }}                        >
                                <div>
                            <GoogleLoginButton />
                                </div>
                                <div style={{marginTop: '1em'}}>
                            <FacebookLoginButton />
                                </div>
                        </LoginSocialGoogle>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
