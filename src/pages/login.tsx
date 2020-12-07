import React, { FormEvent, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth, AuthContext } from '../contexts/auth';

import { TextField, Button } from '@material-ui/core';

import { ArrowBack } from '@material-ui/icons';

import { Container, Form, Main } from '../styles/pages/Login';

import BookLogo from '../assets/images/book.svg';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, user, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) router.back();
    }, [user]);

    function handleBack() {
        router.back();
    }

    async function handleLogin(event: FormEvent) {
        event.preventDefault();
        await login(email, password);
    }

    return (
        <Container>
            <Main>
                <header>
                    <button onClick={handleBack}>
                        <ArrowBack />
                        <span>Back</span>
                    </button>
                    <div className="presents">
                        <BookLogo />
                        <h1>Sign in to start learn</h1>
                    </div>
                </header>
                <Form onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        color="secondary"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                    />
                    <TextField
                        label="Password"
                        color="secondary"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        autoComplete="on"
                    />
                    <Button type="submit" variant="outlined">
                        Login
                    </Button>
                </Form>

                <p>
                    By continue, you aknowledge that you have read and
                    understood, and agree to <a href="#">Terms & Conditions</a>{' '}
                    and <a href="#">Privacy Policy</a>
                </p>
            </Main>
        </Container>
    );
};

export default Login;
