import React from 'react';
import PropTypes from 'prop-types';

export const ExternalLink = ({ to, children }) => (
    <a target="_blank" href={to} rel="noopener noreferrer">
        {children}
    </a>
);

ExternalLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};
