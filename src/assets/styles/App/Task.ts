import styled from 'styled-components';

export const Task = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    width: 100%;
    min-height: 60px;
    border-radius: 8px;
    padding-left: 10px;
    background-color: #64748b;
    overflow: hidden;
    transition: min-height 0.3s;
    &.active {
        min-height: 150px;
    }
`;
