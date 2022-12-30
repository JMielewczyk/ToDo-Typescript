import styled from 'styled-components';

export const Links = styled.div`
    display: flex;
    width: calc(100% + 40px); // 40px is sum of left & right padding
    height: 80px;
    gap: 10px;
    border-top: 1px solid black;
    margin: 0 -20px 0 -20px; // to ignore parent padding &  fit border top to contener
    padding: 0 20px;
    padding-top: 20px;
    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: black;
        border: 1px solid black;
        border-radius: 15px;
    }
`;
