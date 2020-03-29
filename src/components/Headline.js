import styled from 'styled-components';
import { GREY } from './colors';

export const Headline = styled.h1`
    font-weight: 400;
    font-size: 22px;
    color: ${props => props.color};
`;

Headline.defaultProps = {
    color: GREY
};
