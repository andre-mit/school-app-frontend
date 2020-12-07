import React from 'react';
import { useAuth } from '../contexts/auth';

const About: React.FC = () => {
    const { user } = useAuth();
    return (
        <main>
            <h1>About</h1>
        </main>
    );
};

export default About;
