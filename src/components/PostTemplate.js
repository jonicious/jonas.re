import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Animation } from 'react-genie-styled-components';
import { Reveal } from 'react-genie';

import { Layout } from './Layout';
import { ContentWrapper } from './ContentWrapper';
import { Header } from './Header';
import { Spacer } from './Spacer';
import { Showcase } from './Showcase';
import { WrittenTextContent } from './WrittenTextContent';
import { SEO } from './SEO';

export default function PostTemplate({ data }) {
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
                <SEO
                    description={frontmatter.shareText}
                    title={frontmatter.title}
                />

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
                shareText
            }
        }
    }
`;
