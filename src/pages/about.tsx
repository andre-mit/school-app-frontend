import React from 'react';
import { useAuth } from '../contexts/auth';

const About: React.FC = () => {
    const { user } = useAuth();
    return (
        <main>
            <h4>Nome: {user.name}</h4>
            <b>Email: {user.email}</b>
        </main>
    );
};

export default About;
