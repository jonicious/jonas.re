import styled from 'styled-components';
import { WHITE, BLACK } from './colors';

export const ConnectButton = styled.a.attrs({
    target: '_blank'
})`
    padding: 18px 36px;
    border-radius: 4px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    background: ${WHITE};
    border: 2px solid ${WHITE};
    color: ${BLACK};
    transition: 80ms ease-in;
    display: inline-block;

    &:hover {
        background: ${BLACK};
        color: ${WHITE};
        border: 2px solid ${WHITE};
        transition: 80ms ease-in;
    }
`;
