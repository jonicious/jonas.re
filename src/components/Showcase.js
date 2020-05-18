import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Spacer, Headline } from './index';

const Label = styled.span`
    background: #4e4f50;
    color: white;
    padding: 5px 8px 4px 8px;
    border-radius: 4px;
    position: absolute;
    left: ${props => (props.type === 'work' ? '-70px' : '-114px')};

    @media screen and (max-width: 1024px) {
        top: -40px;
        left: 0;
    }
`;

const Wrap = styled.div`
    position: relative;
    align-items: center;
`;

export const Showcase = ({ headline, children, type }) => {
    const label = type === 'work' ? 'Work' : 'Side project';

    return (
        <React.Fragment>
            <Wrap>
                <Label type={type}>{label}</Label>
                <Headline as="h2">{headline}</Headline>
            </Wrap>

            <Spacer space="sm" />
            {children}
        </React.Fragment>
    );
};

Showcase.propTypes = {
    headline: PropTypes.string,
    type: PropTypes.oneOf(['work', 'side-project']),
    children: PropTypes.node
};
