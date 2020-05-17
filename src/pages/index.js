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
    COLORS,
    ProfilePicture
} from '../components';

import { Header } from '../components/Header';
import { Spacer } from '../components/Spacer';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

const ContentWrapper = styled.div`
    max-width: 700px;
    width: 90%;
    margin: 0 auto;
`;

const Headline2 = styled.h2`
    font-weight: 600;
    font-size: 20px;
`;

const ButtonWrapper = styled.div`
    text-align: center;
`;

const ConnectButton = styled.a`
    padding: 18px 36px;
    border-radius: 4px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    background: ${COLORS.WHITE};
    border: 2px solid ${COLORS.WHITE};
    color: ${COLORS.BLACK};
    transition: 80ms ease-in;

    &:hover {
        background: ${COLORS.BLACK};
        color: ${COLORS.WHITE};
        border: 2px solid ${COLORS.WHITE};
        transition: 80ms ease-in;
    }
`;

const Project = ({ headline, paragraphs }) => {
    return (
        <React.Fragment>
            <Headline2 color={COLORS.WHITE}>{headline}</Headline2>
            <Spacer space="sm" />
            {paragraphs.map((paragraph, index) => (
                <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
        </React.Fragment>
    );
};

const Workplace = ({ headline, paragraphs }) => {
    return (
        <React.Fragment>
            <Headline color={COLORS.WHITE}>{headline}</Headline>
            <Spacer space="sm" />
            {paragraphs.map((paragraph, index) => (
                <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
        </React.Fragment>
    );
};

const IndexPage = () => (
    <Layout>
        <SEO />
        <ContentWrapper>
            <Header />

            <Spacer space="lg" />
            <Workplace
                headline="Closelink (since 07/19)"
                paragraphs={[
                    'Closelink is a startup in the maritime industry founded and based in Hamburg. As a Full Stack engineer my role is to plan and develop software thinking about both our needs in the backend as well as our frontend.',
                    'On the frontend side, I focus on moving our existing codebase from AngularJS to React while also building new features. Besides that, I help the team to deepen their knowledge about React.',
                    'On the backend side, I help planning and developing a scalable microservice architecture written in Kotlin, NodeJS and Java.',
                    'In April 2020, we launched a new website entirely rewritten using Gatsby, React and styled-components. Learn more about here.'
                ]}
            />

            <Spacer space="lg" />

            <Reveal animation={Animation.FadeInUp}>
                <Workplace
                    headline="FREE NOW (formerly mytaxi) (08/14 - 06/19)"
                    paragraphs={[
                        'I joined FREE NOW as an apprentice directly after I did my A levels (Abitur). It was very exciting learning about the internals of an app I used as a customer on a regular basis.',
                        'During my time, we grew from ~150 to ~1000 employees which enabled me to learn a lot. I had the chance to be part of many different teams but eventually settled in the B2B team. This area gained more and more focus.',
                        'As B2B was an area that did not have much priority in recent years before, we had the chance to restructure and refactor huge parts while building many new features in different tools. It was very exciting to see the platform grow, integrate with many large corporations and improve internal processes. When I left, the B2B team grew from four members to about 20.'
                    ]}
                />
            </Reveal>

            <Spacer space="lg" />

            <Reveal animation={Animation.FadeInUp}>
                <Project
                    headline="Hamburg Coding School (since 2019)"
                    paragraphs={[
                        'One of my passions is to spread my knowledge to others. Not only does it enable others to do new things they were not able to do before. It is also a great way to deepen your knowledge as well.',
                        'Hamburg Coding School provides a safe learning environment for everyone to learn everything from HTML, CSS to JavaScript to React. My role is to teach the different topics to students, answer project questions and mentor students.'
                    ]}
                />
            </Reveal>

            <Spacer space="lg" />

            <Reveal animation={Animation.FadeInUp}>
                <Project
                    headline="CSSclasses (since 2016)"
                    paragraphs={[
                        'I believe that education should be available for everyone. It enables people to find their passion and create exciting things.',
                        'HTML & CSS is how I started programming. It is a great way to get into programming because you directly have visual feedback in your browser. You directly see the impact your changes have.',
                        'When I visited in a friend in Berlin, we went to a CSSclasses meetup. I came back numerous times and thought, it would be great to have the same event in Hamburg. CSSclasses is an all-day event where people can learn HTML & CSS and ask different coaches for advice.',
                        'After talking to different people, we did the first one in May 2016 followed by many more. It was always fun creating a space where people could just come around, learn and experiment and have something to eat and drink for free.'
                    ]}
                />
            </Reveal>

            <Spacer space="lg" />

            <Reveal animation={Animation.FadeInUp}>
                <ButtonWrapper>
                    <ConnectButton href="https://www.linkedin.com/in/jonas-reitmann-5aa92a15a/">
                        Connect via LinkedIn
                    </ConnectButton>
                </ButtonWrapper>
            </Reveal>
        </ContentWrapper>
    </Layout>
);

export default IndexPage;
