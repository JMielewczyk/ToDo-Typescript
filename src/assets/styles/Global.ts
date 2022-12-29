import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 1rem;
 }

 #root {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    background-color: #1e293b;
 }
`;
