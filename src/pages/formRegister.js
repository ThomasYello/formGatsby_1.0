import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Inscription from "../components/inscription"

class Formregist extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="ACCUEIL" />

        <Inscription />


      </Layout>
    )
  }
}

export default Formregist