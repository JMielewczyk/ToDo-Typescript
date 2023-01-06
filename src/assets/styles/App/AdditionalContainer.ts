import styled from 'styled-components';

export const AdditionalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
    width: 95%;
    height: 45px;
    transition: 0.3s;
    overflow: hidden;
    & button {
        width: 150px;
        min-height: 40px;
        border-radius: 8px;
        border: none;
        background-color: white;
        svg {
            transition: 0.3s;
        }
    }
    &.active {
        height: 220px;
        & button {
            svg {
                transform: rotate(180deg);
            }
        }
    }
`;
