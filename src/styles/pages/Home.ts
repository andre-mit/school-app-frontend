import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
`;

export const CenterH = styled.div`
    display: flex;
    justify-content: center;
`;

export const CenterV = styled.div`
    display: flex;
    align-items: center;
`;

export const Presentation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 900px;
    > svg {
        flex: 1;
    }
`;

export const Search = styled.form`
    flex: 1;
    padding: 16px;

    > input {
        background-color: ${props => props.theme.colors.secondary};
        outline: none;
        border: none;
        width: 100%;
        font-size: 24px;
        height: 90px;
        border-radius: 8px;
        padding: 8px;
        margin-top: 16px;
        color: ${props => props.theme.colors.text};
    }
`;
