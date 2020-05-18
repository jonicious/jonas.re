import React from 'react';
import PropTypes from 'prop-types';

import { Spacer, Headline } from './index';

export const Workplace = ({ headline, children }) => {
    return (
        <React.Fragment>
            <Headline as="h2">{headline}</Headline>
            <Spacer space="sm" />
            {children}
        </React.Fragment>
    );
};

Workplace.propTypes = {
    headline: PropTypes.string,
    children: PropTypes.node
};
