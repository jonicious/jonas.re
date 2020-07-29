import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from './Layout';
import { ContentWrapper } from './ContentWrapper';
import { MDXProvider } from '@mdx-js/react';
import { Headline2 } from './Headline2';
import { Paragraph } from './Paragraph';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Header } from './Header';
import { Spacer } from './Spacer';
import { Headline1 } from './Headline1';

const WrittenTextContent = ({ content, children }) => {
    return (
        <MDXProvider
            components={{
                h2: Headline2,
                p: Paragraph
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
    return (
        <Layout>
            <ContentWrapper>
                <Header />

                <Spacer space="lg" />

                <Headline1>{frontmatter.title}</Headline1>

                <WrittenTextContent content={body} />
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
            }
        }
    }
`;
