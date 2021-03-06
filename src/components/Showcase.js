import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Spacer, Headline2, COLORS } from './index';

const leftStyles = props => {
    switch (props.type) {
        case 'work': {
            return css`
                margin-left: -70px;

                @media screen and (max-width: 1024px) {
                    top: -40px;
                    left: 70px;
                }
            `;
        }
        case 'side-project':
        case 'article': {
            return css`
                margin-left: -114px;

                @media screen and (max-width: 1024px) {
                    top: -40px;
                    left: 114px;
                }
            `;
        }
        default:
            return '';
    }
};

const Label = styled.h3`
    background: ${COLORS.GREY};
    font-weight: 400;
    font-size: 16px;
    color: white;
    padding: 5px 8px 4px 8px;
    border-radius: 4px;
    position: absolute;
    ${leftStyles};
`;

const Wrap = styled.div`
    position: relative;
    align-items: center;
`;

export const Showcase = ({ headline, children, type, label }) => {
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
    headline: PropTypes.node,
    type: PropTypes.oneOf(['work', 'side-project', 'article']),
    label: PropTypes.node,
    children: PropTypes.node
};
