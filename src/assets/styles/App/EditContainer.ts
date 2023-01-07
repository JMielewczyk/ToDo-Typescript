import styled from 'styled-components';

export const EditContainer = styled.div`
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    form {
        display: flex;
        width: 100%;
    }
    input {
        width: 100%;
        height: auto;
        border-radius: 8px 0 0 8px;
        border: none;
        border-right: 1px solid black;
        margin-left: -20px; // to expand input to full width of parent element
        padding-left: 30px;
    }
`;
