import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import { GREY } from './colors';

const ExternalLink = styled.a.attrs(props => ({
    target: '_blank',
    rel: 'noopener noreferrer',
    href: props.to
}))`
    border-bottom: 1px solid ${GREY};
    transition: 0.2s;

    &:hover {
        border-bottom: 1px solid white;
        transition: 0.2s;
    }
`;

const InternalLink = props => <ExternalLink as={GatsbyLink} {...props} />;

export const Link = ({ external = true, ...rest }) => {
    if (external) {
        return <ExternalLink {...rest} />;
    }

    return <InternalLink {...rest} />;
};

Link.propTypes = {
    external: PropTypes.bool
};
