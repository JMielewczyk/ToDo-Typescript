import styled from 'styled-components';

export const RightContainer = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    max-height: 60px;
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
`;
