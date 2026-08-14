import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout'
import Boxer from './components/boxer'
import Header from './components/header'
import siteConfig from '../data/siteConfig'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <div className="body">
        <div id="wrapper">
          <Header siteTitle={siteConfig.title} rootUrl={siteConfig.rootUrl} />
          <h2>{siteConfig.description}</h2>
          <Boxer defautId={0} presets={siteConfig.presets} settings={siteConfig.settings} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  </React.StrictMode>
)
