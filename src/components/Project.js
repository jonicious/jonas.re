import React from 'react';
import PropTypes from 'prop-types';

import { Spacer, Headline2 } from './index';

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
