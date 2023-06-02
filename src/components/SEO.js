/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import profileImageUrl from './jonas-reitmann.jpg';

export const SEO = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
            }
        `
    );

    const makeTitle = () => {
        if (!title) {
            return site.siteMetadata.title;
        }

        return `${title} | ${site.siteMetadata.title}`;
    };

    const metaTitle = makeTitle();
    const metaDescription = description || site.siteMetadata.description;

    const image = `${site.siteMetadata.siteUrl}${profileImageUrl}`;

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={metaTitle}
            meta={[
                {
                    name: 'image',
                    content: image
                },
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: metaTitle
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: 'image',
                    property: 'og:image',
                    content: image
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                {
                    name: `twitter:title`,
                    content: metaTitle
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                },
                {
                    name: 'twitter:image',
                    content: image
                }
            ].concat(meta)}
        />
    );
};

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};
