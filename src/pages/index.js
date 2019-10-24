import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Boxer from "../components/boxer"
import siteConfig from '../../data/siteConfig'
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="body">
      <div id="wrapper">
        <Header siteTitle={siteConfig.title} rootUrl={siteConfig.rootUrl} />
        <h2>{siteConfig.description}</h2>
        <Boxer id="boxer" defautId={0} presets={siteConfig.presets} settings={siteConfig.settings} />
      </div>
      <div id="bg"></div>
    </div>
  </Layout>
)

export default IndexPage
