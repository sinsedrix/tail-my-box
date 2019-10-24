import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Boxer from "../components/boxer"
import siteConfig from '../../data/siteConfig'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>{siteConfig.description}</h2>
    <Boxer id="boxer" defautId={0} presets={siteConfig.presets} settings={siteConfig.settings} />

  </Layout>
)

export default IndexPage
