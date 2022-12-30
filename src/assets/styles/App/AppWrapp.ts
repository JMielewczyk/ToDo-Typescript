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
    padding: 10px;
    background: linear-gradient(
        to right bottom,
        rgba(10, 10, 10, 0.7),
        rgba(10, 10, 10, 0.3)
    );
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.3);
`;
