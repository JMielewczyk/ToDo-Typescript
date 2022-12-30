import styled from 'styled-components';

export const Links = styled.div`
    display: flex;
    width: calc(100% + 40px); // 40px is sum of left & right padding
    height: 80px;
    gap: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
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
        background-color: white;
        border-radius: 8px;
        transition: 0.3s;
        &.active {
            box-shadow: 0 -7px 3px #475569 inset;
        }
    }
`;
