import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Spacer } from './index';

const Headline2 = styled.h3`
    font-weight: 600;
    font-size: 20px;
`;

export const Project = ({ headline, children }) => {
    return (
        <React.Fragment>
            <Headline2 as="h3">{headline}</Headline2>
            <Spacer space="sm" />
            {children}
        </React.Fragment>
    );
};

Project.propTypes = {
    headline: PropTypes.string,
    children: PropTypes.node
};
