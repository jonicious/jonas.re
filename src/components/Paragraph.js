import styled from 'styled-components';
import { WHITE } from './colors';

export const Paragraph = styled.p`
    color: ${WHITE};
    font-size: 18px;
    line-height: 1.6;
    margin-top: 16px;

    &:first-of-type {
        margin-top: 0;
    }
`;
