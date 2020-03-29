import React from 'react';
import styled from 'styled-components';
import { WHITE } from './colors';

const LinkListItem = styled.li`
    color: ${WHITE};
    display: inline-block;
    margin-right: 32px;
    font-size: 18px;

    &:last-child {
        margin-right: 0;
    }
`;

export const LinkList = ({ children }) => {
    return React.Children.map(children, child => {
        return <LinkListItem>{child}</LinkListItem>;
    });
};
