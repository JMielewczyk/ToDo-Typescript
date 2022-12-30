import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    p {
        word-break: break-all;
    }
    form {
        display: flex;
        width: 100%;
    }
    input {
        width: 100%;
        border-radius: 8px 0 0 8px;
        border: none;
        border-right: 1px solid black;
        margin-left: -20px; // to expand input to full width of parent element
        padding-left: 20px;
    }
`;
