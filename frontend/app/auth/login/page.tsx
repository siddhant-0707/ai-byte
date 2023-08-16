'use client'

import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';

const LoginPage: React.FC = () => {
    const { setJwt } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const requestData = {
            username: username,
            password: password
        };
        // Implement login logic here
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestData)
        };

        try {
            const res = await fetch('http://localhost:8080/auth/login', options);
            const data = await res.json();
            const jwt = data.data; // Want to use this elsewhere in the application
            console.log(jwt);
            setJwt({ jwt });
        } catch (error) {
            console.error('Error registering:', error);
        }

    };

    return (
        <div>
            <h1>Login</h1>
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
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
