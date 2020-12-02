import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { AuthProvider, ProtectRoute } from '../contexts/auth';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <GlobalStyle />
                <ProtectRoute>
                    <Component {...pageProps} />
                </ProtectRoute>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default MyApp;
