import { createGlobalStyle } from 'styled-components';
import { device } from './mediaQueries/breakpoints';
import JosefinFont from './fonts/JosefinSans-Regular.ttf';

export default createGlobalStyle`
   @font-face {
      font-family: 'Josefin';
      src: url(${JosefinFont});
   }
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin', sans-serif;
    font-size: 1rem;
 }

 html, body {
   overflow-x: hidden;
 }
 #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100vw;
    min-height: 100vh;
    padding: 10px;
    background-image: linear-gradient( to right bottom,  rgba(44,62,78,1) 12.6%, rgba(69,103,131,1) 82.8% );
    @media ${device.mobileM} {
        padding: 20px;
    }
 }
`;
