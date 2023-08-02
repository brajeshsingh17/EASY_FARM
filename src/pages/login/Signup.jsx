import React from 'react'
import {Link} from 'react-router-dom';
import { register } from '../../modules/reducer/authReducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const Signup = () => {
    const divStyles = {
        boxShadow: '1px 2px 5px #1A237E',
        padding: '1em',
        margin:'auto',
        height: '500px',
        width: '500px',
        marginTop: 25,
        textAlign: 'center'
    };
    const formFields = {
        boxShadow: '1px 2px 2px #1A237E',
        margin: '1em',
        padding: '1em',        
        alignItems: 'center',
    };
    const dispatch = useDispatch();
    const [userData,setUserData] = useState({
        email:"",
        password:"",
        name:"",
        role:""
    })

    const handleChange = (e) => {
        const { name , value } = e.target ;
        setUserData((pre) => ({
            ...pre,
            [name]:value
        }))
    }

    const clickedButton = (e) =>{
        e.preventDefault();
        dispatch(register({data:userData}));
    } 
    return (
        <div>
            <div style={divStyles}>
                    <form onSubmit={clickedButton}>
                        <div className="container">
                            <h2 style={{ color: '#2ccce4' }} className="text-3xl font-bold">Sign-up</h2>
                            <div>
                                <input value={userData.name} name="name" onChange={handleChange} type="text" placeholder="Name" style={formFields} />
                            </div>
                            <div >
                                <input value={userData.email} name="email" onChange={handleChange} type="email" placeholder="Email" style={formFields} />
                            </div>
                            <div >
                                <input value={userData.password} name="password" onChange={handleChange} type="password" placeholder="Password" style={formFields} />
                            </div>
                            <div >
                                <select onChange={handleChange} name="role" placeholder='Role' id="">
                                    <option value="farmer">Please Select The Role</option>
                                    <option value="farmer">Farmer</option>
                                    <option value="seller">Seller</option>
                                </select>
                            </div>
                            <div>
                                <button type="submit" className="btn" class="bg-gradient-to-r from-purple-400 to cyan-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6" >Signup</button>
                            </div >
                            <div style={{ color: '#2ccce4' }} className="text-3xs"> <br/>
                                Already a member? <Link to='/login'>Login</Link> here                     
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Signup
