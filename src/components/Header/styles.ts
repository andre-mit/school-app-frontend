import styled from 'styled-components';

export const Container = styled.header`
    width: 60%;
    align-self: center;

    @media (min-width: 900) {
        min-width: 0;
        width: 100%;
    }
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const LeftSide = styled.div`
    > svg {
        width: 50px;
    }
`;

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 28px;

    > a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
        margin-right: 16px;
    }

    > img {
        width: 45px;
        background-color: #ffffff45;
        border-radius: 50%;
    }

    > button {
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        font-size: 15px;
        color: ${props => props.theme.colors.text};
    }
`;
