import styled from 'styled-components';

export const DeleteContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;
    transition: all 0.3s;
    transform: translateX(100%);
    & p {
        color: white;
    }
    & button {
        width: 50px;
        height: 100%;
        background-color: white;
        border: none;
        border-radius: 8px;
    }
    &.active {
        transform: translateX(0);
    }
`;
