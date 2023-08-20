'use client'

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext<any>('');

export const AuthProvider = ({ children }) => {
    const [jwt, setJwt] = useState(null);

    return (
        <AuthContext.Provider value={{ jwt, setJwt }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
