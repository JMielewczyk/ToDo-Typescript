import styled from 'styled-components';

export const Task = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #64748b;
    overflow: hidden;
    p {
        word-break: break-all;
    }
`;
