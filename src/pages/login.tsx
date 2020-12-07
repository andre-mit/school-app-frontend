import React, { FormEvent, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth, AuthContext } from '../contexts/auth';

import {
    TextField,
    Button,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
} from '@material-ui/core';

import { ArrowBack, Visibility, VisibilityOff } from '@material-ui/icons';

import { Container, Form, Main } from '../styles/pages/Login';

import BookLogo from '../assets/images/book.svg';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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

    const toggleShowPassword = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

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
                    <FormControl>
                        <InputLabel className="label" color="secondary">
                            Password
                        </InputLabel>
                        <Input
                            color="secondary"
                            required
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            autoComplete="on"
                            onChange={e => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleShowPassword}
                                        onMouseDown={e => e.preventDefault()}
                                    >
                                        {showPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
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
