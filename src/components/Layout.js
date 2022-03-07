import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({children}) => {
  return(
    <main>
      <Helmet>
        <title>sergiotbh.dev</title>
      </Helmet>
      {children}
    </main>
  )
}

export default Layout;