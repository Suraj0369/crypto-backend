import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // new 
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                navigate('/coins');
            } else {
                console.log('Invalid credentials');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        // if(formData.username==='Srujay' && formData.password==='Srujay'){
        //     navigate('/coins');
        // }
        // else if(formData.username==='Sandeep' && formData.password==='Sandeep'){
        //     navigate('/coins');
        // }
        // console.log(formData);
    };

    return (
        <div className="login-page">
            <Navbar />
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-username">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="login-password">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit"><strong>Login</strong></button>
                    <h4>Don't have an account?</h4>
                    <a href="/register"><b>Register Here!</b></a>
                </form>
            </div>
        </div>
    );
}

export default Login;
