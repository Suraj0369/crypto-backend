import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Register.css";

import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email:''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // navigate('/login');
        // console.log(formData);
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                navigate('/login');
            } else {
                console.log('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="register-page">
            <Navbar />
            <div className="register-form-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="register-username">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="register-password">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="register-email">
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit"><strong>Register</strong></button>
                    <h4>Already have an account?</h4>
                    <a href="/login"><b>Login Here!</b></a>
                </form>
            </div>
        </div>
    )
}
export default Register;