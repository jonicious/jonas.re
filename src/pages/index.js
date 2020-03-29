import React from 'react';
import styled from 'styled-components';

import {
    LinkList,
    Stack,
    Paragraph,
    Headline,
    Layout,
    SEO,
    ExternalLink,
    COLORS
} from '../components';

const ContentWrapper = styled.div`
    max-width: 700px;
    width: 90%;
    margin: 0 auto;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 50em) {
        flex-direction: column;
    }
`;

const AboutText = () => (
    <Paragraph>
        I am currently living and working in Hamburg, Germany as a developer for{' '}
        <ExternalLink to="https://www.closelink.net/">Closelink</ExternalLink>.
        Before Closelink, I worked at{' '}
        <ExternalLink to="https://mytaxi.com/de/">mytaxi</ExternalLink> for
        almost five years. Beside work related projects, I enjoy{' '}
        <ExternalLink to="https://github.com/CSSclasses/CSSclasses-Hamburg">
            organising
        </ExternalLink>{' '}
        meetups like{' '}
        <ExternalLink to="https://cssclass.es/">CSSclasses</ExternalLink>,{' '}
        <ExternalLink to="https://vsco.co/joonaas/journal/p/1">
            taking photos
        </ExternalLink>{' '}
        and traveling. I do not enjoy writing copies like this.
    </Paragraph>
);

const IndexPage = () => (
    <Layout>
        <SEO />
        <ContentWrapper>
            <Header>
                <Headline as="h1" color={COLORS.WHITE}>
                    Jonas Reitmann
                </Headline>
                <Headline as="h2">Workplace: Closelink</Headline>
            </Header>

            <Stack space="md">
                <Headline as="h3">
                    About me{' '}
                    <span role="img" aria-label="Man with raised hand">
                        🙋‍♂
                    </span>
                    ️
                </Headline>
                <Stack md="sm">
                    <AboutText />
                </Stack>
            </Stack>

            <Stack space="md">
                <Headline as="h3">
                    Links{' '}
                    <span role="img" aria-label="Man shrugging">
                        🤷‍♂
                    </span>
                    ️️
                </Headline>

                <Stack space="sm">
                    <LinkList>
                        <ExternalLink to="https://twitter.com/jonicious">
                            Twitter
                        </ExternalLink>
                        <ExternalLink to="https://github.com/jonicious">
                            Github
                        </ExternalLink>
                        <ExternalLink to="mailto:jonas@reitmann.me">
                            E-Mail
                        </ExternalLink>
                    </LinkList>
                </Stack>
            </Stack>
        </ContentWrapper>
    </Layout>
);

export default IndexPage;
