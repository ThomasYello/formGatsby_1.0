import React from "react"
import { Link } from "gatsby"
import firebaseconf from "./config"
import Layout from "../components/layout"
import SEO from "../components/seo"


class connexion extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            form: [],
            password: "",
            email: "",
            nom: "",
            prenom: "",
        }


    }

    componentDidMount() {
        let formRef = firebaseconf.database().ref('utilisateurs');
        formRef.on('child_added', snapshot => {
          const { nom, prenom, email } = snapshot.val();
          const data = { nom, prenom, email };
          this.setState({ form: [data].concat(this.state.form) });

        })
      }
    

    handleSubmit = event =>{

        event.preventDefault();

    }

    handleChange = event =>{

        event.preventDefault();

        this.setState({[event.target.name]:event.target.value})

    }


    render(){

        const { email, password} = this.state

        return(

            <Layout>

             <SEO title="Formulaire" />

                
            <div className="wrapper">
                <h1>Connexion</h1>
                 
                <div className="from-wrapper">
                    <form onSubmit={this.handleSubmit} >
                        
                        <div className="Email">
                            <label htmlFor="email"> Courriel</label>
                            <input onChange={this.handleChange} type='email' name='email' value={email} />

                            <label htmlFor="password"> Mot de passe</label>
                            <input onChange={this.handleChange} type='password' name='password' value={password} />

                        </div>

                        <div className="insc">
                        <small> <Link to="/inscription">cliquer ici pour vous inscrire</Link></small>
                        </div>

                        <div className="bouton">
                        <button onSubmit={this.handleSubmit}> Valider </button>
                        </div>

                
                    </form>

          
                </div>

            </div>

            </Layout>

        );
    }
}

export default connexion;
