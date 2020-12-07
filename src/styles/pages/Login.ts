import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 450px;
    height: 100%;

    & > header {
        display: flex;
        flex-direction: column;
    }

    & > header button {
        display: flex;
        align-items: center;

        background-color: transparent;
        color: ${props => props.theme.colors.text};

        border: none;
        cursor: pointer;
        font-size: 24px;

        outline: none;
        margin-bottom: 36px;
        width: fit-content;
        transition: color 0.2s;
        > svg {
            width: 24px;
        }
        > span {
            margin-left: 8px;
        }

        &:hover {
            color: ${props => props.theme.colors.text + 35};
        }
    }

    & > header .presents {
        display: flex;
        justify-content: space-around;
        align-items: center;
        > svg {
            width: 80px;
        }
    }

    & > p > a {
        color: ${props => props.theme.colors.text};
        font-weight: bold;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 25%;
`;
