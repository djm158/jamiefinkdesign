import React from 'react'
import Helmet from 'react-helmet'

import './sass/all.sass'

import favicon from '../../static/img/favicon.png';


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jamie Fink Design"
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
