import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import { Paragraph } from './Paragraph';
import { ExternalLink } from './ExternalLink';
import { Headline3 as OriginalHeadline3 } from './Headline3';
import { GREY } from './colors';

const Link = ({ href, ...rest }) => <ExternalLink to={href} {...rest} />;

Link.propTypes = {
    href: PropTypes.string
};

const Headline3 = styled(OriginalHeadline3)`
    margin: 24px 0;
`;

const Hr = styled.hr`
    border: 1px solid ${GREY};
    margin: 32px 0;
`;

export const WrittenTextContent = ({ content, children }) => {
    return (
        <MDXProvider
            components={{
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
