module.exports = {
    siteMetadata: {
        title: 'Jonas Reitmann',
        description:
            'I am Jonas, a software engineer living and working in Hamburg, Germany at Closelink, a technology company in the maritime industry.',
        author: '@jonicious',
        siteUrl: 'https://jonas.re'
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-eslint',
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: `posts`
            }
        },
        {
            // There is a bug in gatsby-remark-images
            // Because of this, we add configure the plugin twice.
            // https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237

            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1000
                        }
                    }
                ],
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1000
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-feed-mdx`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.edges.map(edge => {
                                return Object.assign(
                                    {},
                                    edge.node.frontmatter,
                                    {
                                        description: edge.node.excerpt,
                                        date: edge.node.frontmatter.date,
                                        url:
                                            site.siteMetadata.siteUrl +
                                            '/posts' +
                                            edge.node.frontmatter.slug,
                                        guid:
                                            site.siteMetadata.siteUrl +
                                            '/posts' +
                                            edge.node.frontmatter.slug,
                                        custom_elements: [
                                            {
                                                'content:encoded':
                                                    edge.node.html
                                            }
                                        ]
                                    }
                                );
                            });
                        },
                        query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        slug
                      }
                    }
                  }
                }
              }
            `,
                        output: '/rss.xml',
                        title: 'Jonas Reitmann'
                    }
                ]
            }
        }
    ]
};
