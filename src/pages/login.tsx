import React, { FormEvent, useState, useContext, useEffect } from 'react';
import { useAuth, AuthContext } from '../contexts/auth';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, user } = useAuth();

    useEffect(() => {
        console.log(user);
    }, [user]);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();
        await login(email, password);
    }

    return (
        <form onSubmit={handleLogin}>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
            />
            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
            />
            <button>Logar</button>
        </form>
    );
};

export default Login;
