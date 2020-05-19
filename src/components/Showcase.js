import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Spacer, Headline2, COLORS } from './index';

const Label = styled.h3`
    background: ${COLORS.GREY};
    font-weight: 400;
    font-size: 16px;
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
                <Headline2>{headline}</Headline2>
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
