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
    background-image: linear-gradient( to right bottom,  rgba(44,62,78,1) 12.6%, rgba(69,103,131,1) 82.8% );
 }
`;
