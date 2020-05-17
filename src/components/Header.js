import React from 'react';
import styled from 'styled-components';

import { ProfilePicture } from './ProfilePicture';
import { Headline } from './Headline';
import { COLORS, ExternalLink, LinkList } from './index';
import { Spacer } from './Spacer';
import { WHITE } from './colors';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Right = styled.div`
    margin-left: 56px;
`;

const Paragraph = styled.p`
    color: ${WHITE};
    font-size: 16px;
    line-height: 1.6;
    margin-top: 16px;

    &:first-of-type {
        margin-top: 0;
    }
`;

export const Header = () => {
    return (
        <React.Fragment>
            <HeaderWrapper>
                <ProfilePicture />
                <Right>
                    <Headline as="h1" color={COLORS.WHITE}>
                        Jonas Reitmann
                    </Headline>

                    <Spacer space="sm" />

                    <Paragraph>
                        Hey there, I am Jonas, a software engineer living and
                        working in Hamburg, Germany at Closelink, a technology
                        company in the maritime industry.
                    </Paragraph>

                    <Spacer space="md" />

                    <LinkList>
                        <ExternalLink to="https://www.linkedin.com/in/jonas-reitmann-5aa92a15a/">
                            LinkedIn
                        </ExternalLink>
                        <ExternalLink to="https://github.com/jonicious">
                            Github
                        </ExternalLink>
                        <ExternalLink to="https://twitter.com/jonicious">
                            Twitter
                        </ExternalLink>
                        <ExternalLink to="mailto:jonas@reitmann.me">
                            E-Mail
                        </ExternalLink>
                    </LinkList>
                </Right>
            </HeaderWrapper>
        </React.Fragment>
    );
};
