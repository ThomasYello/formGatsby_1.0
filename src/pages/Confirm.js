import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

class Confirm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: false}
  }
  
  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.userFetch()
    })
  }

  userFetch = () => {
    this.setState({
      nom: this.props.location.state.nom,
      prenom: this.props.location.state.prenom,
      email: this.props.location.state.email,
      loading: false,
    })
  }

  render() {
    const { nom, prenom, email } = this.state

    if (!this.state.loading) {
      return (
        <Layout>
          <SEO title="Merci !" />

          <h1>
            Merci pour votre participation {nom} {prenom}
          </h1>

          <p> Un mail vous a été envoyé à : {email} !</p>
        </Layout>
      )
    } else {
      return <h2>Loading</h2>
    }
  }
}

export default Confirm
