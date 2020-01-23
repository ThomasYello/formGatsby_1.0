import React from "react"
import { Link } from "gatsby"
import firebaseconf from "./config"
import Layout from "../components/layout"
import SEO from "../components/seo"




class Confirm extends React.Component {

  
  constructor (props){
    super(props);
    
    this.state = {
      form: [],
      nom: "",
      prenom: "",
      email: "",
    }
    
  }

  componentDidMount() {
    let formRef = firebaseconf.database().ref('utilisateurs').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { nom, prenom, email } = snapshot.val();
      const data = { nom, prenom, email };
      this.setState({ form: [data].concat(this.state.form) });
    })
  }
  
 
  render(){

    const form = this.state.form

    
    
 const liste =  Object.keys(form).map( i => (
      <ul  key={i} >

          <li><span key={i}> Name: {form[i].nom}</span></li>
          <li><span key={i}> Prenom: {form[i].prenom}</span></li>
          <li><span key={i}> Email: {form[i].email}</span></li>
        
      </ul>
  ))


    return(
    
  <Layout>
    <SEO title="Confirmation Formulaire" />

    <div className='liste-uti'>
      <h1> Liste des utilisteurs </h1>


        <a className='p'>{liste}</a>
        
    </div>

  

    <Link to="/">Retourner à l'accueil </Link>
  </Layout>
)
}
}
export default Confirm
