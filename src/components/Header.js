import React from 'react';
import styled from 'styled-components';

import { Link as GatsbyLink } from 'gatsby';

import {
    Link,
    LinkList,
    Spacer,
    Paragraph,
    Headline1,
    ProfilePicture
} from './index';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Right = styled.div`
    margin-left: 56px;

    @media screen and (max-width: 600px) {
        margin-top: 16px;
        margin-left: 0;
    }
`;

const Left = styled.div`
    flex-shrink: 0;
`;

export const Header = () => {
    return (
        <React.Fragment>
            <HeaderWrapper>
                <Left>
                    <GatsbyLink to="/">
                        <ProfilePicture />
                    </GatsbyLink>
                </Left>
                <Right>
                    <Headline1>Jonas Reitmann</Headline1>

                    <Spacer space="xs" />

                    <Paragraph>
                        Hey there, I am Jonas, a software engineer living and
                        working in Hamburg, Germany at{' '}
                        <Link to="https://www.closelink.net/">Closelink</Link>,
                        a technology company in the maritime industry. Read my
                        blog posts{' '}
                        <Link to="/posts" external={false}>
                            here
                        </Link>
                        !
                    </Paragraph>

                    <Spacer space="md" />

                    <LinkList>
                        <Link to="https://www.linkedin.com/in/jonas-reitmann-5aa92a15a/">
                            LinkedIn
                        </Link>
                        <Link to="https://github.com/jonicious">Github</Link>
                        <Link to="https://twitter.com/jonicious">Twitter</Link>
                        <Link to="mailto:jonas@reitmann.me">E-Mail</Link>
                    </LinkList>
                </Right>
            </HeaderWrapper>
        </React.Fragment>
    );
};
