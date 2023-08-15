'use client'

import React, { useState } from 'react';

const RegisterPage: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const requestData = {
            username: username,
            password: password
        };
        // Implement your registration logic here
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestData)
        };

        try {
            const res = await fetch('http://localhost:8080/auth/register', options);
            const data = await res.json();
            console.log(data); // Print response data
        } catch (error) {
            console.error('Error registering:', error);
        }

    };

    return (
        <div>
            <h1>Register</h1>
            <form>
                <div>
                    <label>Username:</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
