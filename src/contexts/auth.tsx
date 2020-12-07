import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Cookies from 'js-cookie';

import api from '../services/api';

interface User {
    id: string;
    email: string;
    name: string;
    avatar: {
        id: string;
        url: string;
        media_Type: {
            id: string;
            name: string;
            extension: string;
        };
    };
    role: Role[];
}

interface Role {
    id: string;
    name: string;
}

interface ContextProps {
    isAuthenticated: boolean;
    user: User;
    login(email: string, password: string): Promise<void>;
    logout(): void;
    loading: boolean;
}

export const AuthContext = createContext({} as ContextProps);

export const AuthProvider: React.FC = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token');
            if (token) {
                api.defaults.headers.Authorization = `Bearer ${token}`;
                const { data: user } = await api.get('auth');
                if (user) setUser(user);
            }
            setLoading(false);
        }
        loadUserFromCookies();
    }, []);

    const login = async (email: string, password: string) => {
        const response = await api.post('auth', { email, password });
        if (response.status === 200) {
            const { token, user } = response.data;
            Cookies.set('token', token, { expires: 2 });
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setUser(user);
            await router.push('/');
        }
    };

    const logout = async (): Promise<void> => {
        Cookies.remove('token');
        setUser(null);
        delete api.defaults.headers.Authorization;
        await router.push('/');
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated: !!user, user, login, logout, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const LoadingScreen = () => <h1>Loading</h1>;

export const ProtectRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
    if (loading) {
        return <LoadingScreen />;
    } else if (
        window.location.pathname !== '/' &&
        !isAuthenticated &&
        window.location.pathname !== '/login'
    ) {
        router.push('/login');
    } else if (isAuthenticated && window.location.pathname === '/login') {
        router.push('/');
    }
    return children;
};

export const useAuth = () => useContext(AuthContext);
