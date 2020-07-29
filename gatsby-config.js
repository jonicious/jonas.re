module.exports = {
    siteMetadata: {
        title: 'Jonas Reitmann',
        description:
            'I am Jonas, a software engineer living and working in Hamburg, Germany at Closelink, a technology company in the maritime industry.',
        author: '@jonicious',
        siteUrl: 'https://playground.jonas.re'
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
        `gatsby-plugin-mdx`
    ]
};
