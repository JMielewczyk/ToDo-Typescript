import styled from 'styled-components';
import { OptionContainer } from './OptionContainer';

export const DateContainer = styled(OptionContainer)`
    width: 100px;
    justify-content: space-between;
    transition: 0.3s;
    overflow: hidden;
    & div {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        min-width: 90px;
        & div {
            justify-content: center;
            min-width: 25px;
        }
    }
    &.active {
        width: 100%;
        & div {
            border-right: 1px solid black;
        }
    }
`;
