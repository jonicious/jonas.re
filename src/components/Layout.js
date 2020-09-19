import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Reveal } from 'react-genie';
import { Animation, ReactGenieAnimations } from 'react-genie-styled-components';
import 'typeface-source-sans-pro';

import { BLACK } from './colors';
import { Header } from './Header';
import { ContentWrapper } from './ContentWrapper';
import { Spacer } from './Spacer';
import { ConnectButton } from './ConnectButton';

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
        text-decoration: none;
    }
`;

const Spaced = styled.div`
    padding-top: 96px;
    padding-bottom: 96px;
`;

const ButtonWrapper = styled.div`
    text-align: center;
`;

export const Layout = ({ children }) => (
    <React.Fragment>
        <GlobalStyle />
        <ReactGenieAnimations />
        <Spaced>
            <ContentWrapper>
                <Header />

                {children}

                <Spacer space="xlg" />

                <Reveal animation={Animation.FadeInUp}>
                    <ButtonWrapper>
                        <ConnectButton href="https://www.linkedin.com/in/jonas-reitmann-5aa92a15a/">
                            Connect via LinkedIn
                        </ConnectButton>
                    </ButtonWrapper>
                </Reveal>
            </ContentWrapper>
        </Spaced>
    </React.Fragment>
);

Layout.propTypes = {
    children: PropTypes.node
};
