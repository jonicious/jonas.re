import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from './index';

const LinkListItem = styled.li`
    color: ${COLORS.WHITE};
    display: inline-block;
    margin-right: 32px;
    font-size: 18px;

    &:last-child {
        margin-right: 0;
    }
`;

export const LinkList = ({ children }) => {
    return (
        <ul>
            {React.Children.map(children, child => {
                return <LinkListItem>{child}</LinkListItem>;
            })}
        </ul>
    );
};

LinkList.propTypes = {
    children: PropTypes.node
};
