import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    height: 60px;
    color: black;
    border-radius: 8px;
    border: none;
    padding-left: 20px;
    &.warning {
        box-shadow: 0 0 5px 2px red;
    }
`;
