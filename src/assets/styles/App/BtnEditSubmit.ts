import styled from 'styled-components';
import { ButtonSubmit } from './ButtonSubmit';

export const BtnEditSubmit = styled(ButtonSubmit)`
    border-radius: 0 8px 8px 0;
    :active {
        transform: translateY(-10%);
    }
    svg {
        transform: rotate(180deg);
    }
`;
