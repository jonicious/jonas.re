import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Animation } from 'react-genie-styled-components';
import { Reveal } from 'react-genie';
import {
    FormattedDate,
    Layout,
    Link,
    Paragraph,
    SEO,
    Showcase,
    Spacer
} from '../components';

const Posts = ({ data }) => {
    return (
        <Layout>
            <SEO />

            <Spacer space="xlg" />

            {data.allMdx.edges.map(edge => {
                const post = edge.node;
                const { frontmatter } = post;

                return (
                    <Reveal key={post.id} animation={Animation.FadeInUp}>
                        <Showcase
                            headline={
                                <Link
                                    external={false}
                                    to={`/posts/${frontmatter.slug}`}
                                >
                                    {frontmatter.title}
                                </Link>
                            }
                            type="article"
                            label={
                                <FormattedDate
                                    date={new Date(frontmatter.date)}
                                />
                            }
                        >
                            <Paragraph>{frontmatter.shareText}</Paragraph>
                        </Showcase>

                        <Spacer space="lg" />
                    </Reveal>
                );
            })}
        </Layout>
    );
};

Posts.propTypes = {
    data: PropTypes.object
};

export default Posts;

export const pageQuery = graphql`
    {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                        shareText
                        title
                        date
                    }
                }
            }
        }
    }
`;
