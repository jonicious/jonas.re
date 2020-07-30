import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Animation } from 'react-genie-styled-components';
import { Reveal } from 'react-genie';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import { Layout } from './Layout';
import { ContentWrapper } from './ContentWrapper';
import { Headline2 } from './Headline2';
import { Headline3 as OriginalHeadline3 } from './Headline3';
import { Paragraph } from './Paragraph';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Header } from './Header';
import { Spacer } from './Spacer';
import { Showcase } from './Showcase';
import { GREY } from './colors';
import { ExternalLink } from './ExternalLink';

const Headline3 = styled(OriginalHeadline3)`
    margin: 24px 0;
`;

const Hr = styled.hr`
    border: 1px solid ${GREY};
    margin: 32px 0;
`;

const Link = ({ href, ...rest }) => <ExternalLink to={href} {...rest} />;

Link.propTypes = {
    href: PropTypes.string
};

const WrittenTextContent = ({ content, children }) => {
    return (
        <MDXProvider
            components={{
                h2: Headline2,
                h3: Headline3,
                p: Paragraph,
                hr: Hr,
                a: Link
            }}
        >
            <article>
                {children}
                <MDXRenderer>{content}</MDXRenderer>
            </article>
        </MDXProvider>
    );
};

WrittenTextContent.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node
};

export default function PostTemplate({
    data // this prop will be injected by the GraphQL query below.
}) {
    const { mdx } = data;
    const { frontmatter, body } = mdx;

    const date = new Date(frontmatter.date);
    const formattedDate = new Intl.DateTimeFormat('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date);

    return (
        <Layout>
            <ContentWrapper>
                <Header />

                <Spacer space="lg" />

                <Reveal animation={Animation.FadeInUp}>
                    <Showcase
                        headline={frontmatter.title}
                        type="article"
                        label={formattedDate}
                    >
                        <WrittenTextContent content={body} />
                    </Showcase>
                </Reveal>
            </ContentWrapper>
        </Layout>
    );
}

PostTemplate.propTypes = {
    data: PropTypes.object
};

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                date
            }
        }
    }
`;
