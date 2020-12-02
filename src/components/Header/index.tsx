import React from 'react';

import { Container, LeftSide, Navbar, RightSide } from './styles';
import { useAuth } from '../../contexts/auth';

import Logo from '../../assets/images/book.svg';
import Link from 'next/link';

const Header: React.FC = () => {
    const { isAuthenticated, logout, user } = useAuth();
    return (
        <Container>
            <Navbar>
                <LeftSide>
                    <Logo />
                </LeftSide>
                <RightSide>
                    {isAuthenticated ? (
                        <>
                            <Link href="/about">About</Link>
                            <img src={user.avatar.url} />
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">Login</Link>
                        </>
                    )}
                </RightSide>
            </Navbar>
        </Container>
    );
};

export default Header;
