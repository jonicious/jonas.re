import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import { Paragraph } from './Paragraph';
import { Link as OriginalLink } from './Link';
import { Headline3 as OriginalHeadline3 } from './Headline3';
import { GREY } from './colors';

const Link = ({ href, ...rest }) => <OriginalLink to={href} {...rest} />;

Link.propTypes = {
    href: PropTypes.string
};

const Headline3 = styled(OriginalHeadline3)`
    margin: 24px 0 16px 0;
`;

const Hr = styled.hr`
    border: 1px solid ${GREY};
    margin: 32px 0;
`;

const Li = styled(Paragraph).attrs({
    as: 'li'
})`
    list-style: disc;
    margin-top: 8px;
    margin-left: 20px;

    &:first-of-type {
        margin-top: 8px;
    }
`;

export const WrittenTextContent = ({ content, children }) => {
    return (
        <MDXProvider
            components={{
                h3: Headline3,
                p: Paragraph,
                hr: Hr,
                a: Link,
                li: Li
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
