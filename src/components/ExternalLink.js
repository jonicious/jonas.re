import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GREY } from './colors';

export const ExternalLink = styled.a.attrs(props => ({
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

ExternalLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};
