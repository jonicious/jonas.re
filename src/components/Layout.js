import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import './fonts.css';
import { BLACK } from './colors';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Source Code Pro", serif;
        
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

export const Layout = ({ children }) => (
    <React.Fragment>
        <GlobalStyle />
        {children}
    </React.Fragment>
);

Layout.propTypes = {
    children: PropTypes.node
};
