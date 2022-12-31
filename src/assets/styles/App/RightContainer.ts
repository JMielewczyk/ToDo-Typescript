import styled from 'styled-components';

export const RightContainer = styled.div`
    display: flex;
    min-width: 30%;
    height: 100%;
    border-radius: 8px;
    transform: translateX(80%);
    overflow: hidden;
    transition: 0.3s;
    &.active {
        transform: translateX(0);
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
`;
