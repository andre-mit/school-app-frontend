import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core';

import theme from '../styles/theme';
import { dark as materialDarkTheme } from '../styles/themes/material-themes';

import { AuthProvider, ProtectRoute } from '../contexts/auth';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <MaterialThemeProvider theme={materialDarkTheme}>
                <AuthProvider>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </AuthProvider>
            </MaterialThemeProvider>
        </ThemeProvider>
    );
};

export default MyApp;
