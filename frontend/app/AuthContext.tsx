'use client'

import { createContext, useContext, useState } from 'react';

interface AuthContextProps {
    jwt: string;
    setJwt: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC = ({ children }) => {
    const [jwt, setJwt] = useState<string>('');

    return (
        <AuthContext.Provider value={{ jwt, setJwt }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};


