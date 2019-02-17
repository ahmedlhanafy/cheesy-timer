import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

type Props = {
  description?: string;
  lang?: string;
  meta: any[];
  keywords: string[];
  title: string;
};

const SEO = ({ description, lang, meta, keywords, title }: Props) => (
  <StaticQuery
    query={graphql`
      query DefaultSEOQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : [],
            )
            .concat(meta)}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Pacifico"
            rel="stylesheet"
          />
        </Helmet>
      );
    }}
  />
);

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

export default SEO;
