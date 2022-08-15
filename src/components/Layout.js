import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({children, title, url, description}) => {

  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        url
        title
        description
      }
    }
  }
`);

  const defaults = data.site.siteMetadata;

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    url: url || defaults.url
  };

  return(
    <main>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <meta name="description" content={seo.description}/>
        <title>sergiotbh.dev</title>
      </Helmet>
      {children}
    </main>
  )
}

export default Layout;