import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { ReactGenieAnimations } from 'react-genie-styled-components';
import 'typeface-source-sans-pro';
import { BLACK } from './colors';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Source Sans Pro", serif;

        height: 100vh;
        width: 100vw;
        background: ${BLACK};
        color: white;
    }
      
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    a {
        color: inherit;
        text-decoration: underline;
    }
`;

const Spaced = styled.div`
    padding-top: 96px;
    padding-bottom: 96px;
`;

export const Layout = ({ children }) => (
    <React.Fragment>
        <GlobalStyle />
        <ReactGenieAnimations />
        <Spaced>{children}</Spaced>
    </React.Fragment>
);

Layout.propTypes = {
    children: PropTypes.node
};
