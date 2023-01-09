import styled from 'styled-components';
import { device } from '../mediaQueries/breakpoints';

export const FooterWrap = styled.footer`
    /* display: flex;
    width: 100vw;
    height: 10vh;
    margin-bottom: -20px;
    background: linear-gradient(
        to right bottom,
        rgba(10, 10, 10, 0.7),
        rgba(10, 10, 10, 0.3)
    ); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    padding: 20px;
    gap: 20px;
    width: 100vw;
    margin-bottom: -10px;
    text-align: center;
    background: linear-gradient(
        to right bottom,
        rgba(10, 10, 10, 0.7),
        rgba(10, 10, 10, 0.3)
    );
    & p {
        font-size: 1.5rem;
        color: white;
    }
    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        svg {
            font-size: 2rem;
            color: white;
        }
    }
    @media ${device.mobileM} {
        margin-bottom: -20px;
    }
`;
