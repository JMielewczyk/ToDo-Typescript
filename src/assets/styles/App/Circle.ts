import styled from 'styled-components';

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 25px;
    min-height: 25px;
    border: 1px solid black;
    border-radius: 100%;
    &.done {
        background-color: #4ade80;
    }
    svg {
        font-size: 0;
        transition: 0.1s;
    }
    &.done svg {
        font-size: 1rem;
    }
`;
