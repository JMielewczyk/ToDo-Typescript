import styled from 'styled-components';
import { device } from '../mediaQueries/breakpoints';

export const RightContainer = styled.div`
    display: flex;
    width: 45%;
    height: 100%;
    max-height: 80px;
    border-radius: 8px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(70%);
    overflow: hidden;
    transition: 0.3s;
    padding-right: 10px;
    &.active {
        transform: translateX(0);
        padding: 0;
    }
    &.active div:nth-of-type(1) svg {
        transform: rotate(-90deg);
    }
    & button {
        background-color: white;
        border: none;
        border-right: 1px solid black;
        width: 100%;
    }
    @media ${device.mobileM} {
        width: 35%;
    }
    @media ${device.tablet} {
        width: 20%;
    }
`;
