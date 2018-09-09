import React from 'react'
import Helmet from 'react-helmet'

import './sass/all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
