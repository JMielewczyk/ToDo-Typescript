import styled from 'styled-components';

export const RightContainer = styled.div`
    display: flex;
    min-width: 30%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    & button {
        background-color: white;
        border: none;
        border-right: 1px solid black;
        width: 100%;
    }
`;
