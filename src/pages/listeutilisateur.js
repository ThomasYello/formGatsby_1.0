import React from "react"
import { Link } from "gatsby"
import firebaseconf from "../components/config"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Confirm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form: [],
      nom: "",
      prenom: "",
      email: "",
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true } , () => {
      let formRef = firebaseconf
      .database()
      .ref("utilisateurs")
      .orderByKey()
    formRef.on("child_added", snapshot => {
      const { nom, prenom, email } = snapshot.val()
      const data = { nom, prenom, email }
      this.setState({ form: [data].concat(this.state.form) } , () => {
        this.setState({ loading: false })
      })
    })
    
    })
    
  }

  render() {
    const form = this.state.form
    const {loading} = this.state

    const liste = Object.keys(form).map(i => (
      <ul key={i} className="bloc">
        <li>
          <span key={i}> Name: {form[i].nom}</span>
        </li>
        <li>
          <span key={i}> Prenom: {form[i].prenom}</span>
        </li>
        <li>
          <span key={i}> Email: {form[i].email}</span>
        </li>
      </ul>
    ))

      return (
        <Layout>
          <SEO title="Confirmation Formulaire" />

          <h1> Liste des utilisteurs </h1>

          {!loading ? <div className="container">{liste}</div> : <p>loading</p>}

          <Link to="/">Retourner à l'accueil </Link>
        </Layout>
      )

  }
}
export default Confirm
