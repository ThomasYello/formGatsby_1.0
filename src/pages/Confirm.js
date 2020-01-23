import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"




class Confirm extends React.Component {

  
  constructor (props){
    super(props);
    
    this.state = {
      form: [],
      nom: "",
      prenom: "",
      email: ""
    }
    
  }

  componentDidMount(){

    this.setState({
      nom: this.props.location.state.nom,
      prenom: this.props.location.state.prenom,
      email: this.props.location.state.email,
      form: this.props.location.state.form
    })
  }
  
 
  render(){

    const form = this.props.location.state.form
    
    console.log(form)
    
    
 const liste =  Object.keys(form).map( i => (
      <ul className="travelcompany-input" key={i} >
        <br />
          <li><span key={i}> Name: {form[i].nom}</span></li>
          <li><span key={i}> Prenom: {form[i].prenom}</span></li>
          <li><span key={i}> Email: {form[i].email}</span></li>
          
      </ul>
  ))

   const {nom, prenom, email} = this.state
    return(
    
  <Layout>
    <SEO title="Confirmation Formulaire" />
    <div className="conf">
    <center >
    
    <h1>Terminé avec succès ! </h1>

      <b> Vos données :</b>

      
        
        <p>votre nom est {nom} </p>

        <p>votre prenom est {prenom}</p>

        <p>votre email est {email} </p>

      </center>

      

    </div>
    

  </Layout>
)
}
}
export default Confirm
