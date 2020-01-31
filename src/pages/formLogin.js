import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Connexion from "../components/connexion"

class Formlogin extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="ACCUEIL" />

        <Connexion />


      </Layout>
    )
  }
}

export default Formlogin