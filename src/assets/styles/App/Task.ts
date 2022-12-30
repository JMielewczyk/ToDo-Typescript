import styled from 'styled-components';

export const Task = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    padding-left: 10px;
    background-color: #64748b;
    overflow: hidden;
    transition: 0.3s;
    &.active {
        height: 120px;
    }
`;
