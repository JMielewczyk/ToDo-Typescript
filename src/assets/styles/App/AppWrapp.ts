import styled from 'styled-components';

export const AppWrapp = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    height: 90vh;
    max-width: 900px;
    border-radius: 15px;
    overflow: hidden;
    padding: 20px;
    background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.3)
    );
`;
