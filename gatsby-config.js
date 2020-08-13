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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: `posts`
            }
        },
        `gatsby-plugin-sharp`,
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
        }
    ]
};
