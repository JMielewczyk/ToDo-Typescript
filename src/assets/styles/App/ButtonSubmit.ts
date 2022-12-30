import styled from 'styled-components';

export const ButtonSubmit = styled.button`
    width: 20%;
    height: 60px;
    background-color: white;
    border: none;
    border-radius: 8px;
    transition: 0.1s;
    :active {
        transform: translateY(20%);
        background-color: #22c55e;
    }
`;
