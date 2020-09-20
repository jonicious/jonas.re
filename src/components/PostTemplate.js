import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Animation } from 'react-genie-styled-components';
import { Reveal } from 'react-genie';

import { Layout } from './Layout';
import { Spacer } from './Spacer';
import { Showcase } from './Showcase';
import { WrittenTextContent } from './WrittenTextContent';
import { SEO } from './SEO';
import { FormattedDate } from './FormattedDate';

export default function PostTemplate({ data }) {
    const { mdx } = data;
    const { frontmatter, body } = mdx;

    return (
        <Layout>
            <SEO
                description={frontmatter.shareText}
                title={frontmatter.title}
            />
            <Spacer space="xlg" />

            <Reveal animation={Animation.FadeInUp}>
                <Showcase
                    headline={frontmatter.title}
                    type="article"
                    label={<FormattedDate date={new Date(frontmatter.date)} />}
                >
                    <WrittenTextContent content={body} />
                </Showcase>
            </Reveal>
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
