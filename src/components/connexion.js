import React from "react"
import { Link, navigate } from "gatsby"
import firebaseconf from "./config"



class Connexion extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            form: [],
            password: "",
            email: "",
            nom: "",
            prenom: "",
            fireErrors: ''
        }


    }

    

    handleSubmit = event => {
        event.preventDefault();

        firebaseconf.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        
        .catch((error) => {

            this.setState({fireErrors: error.message})

        });

        navigate("/" )

    }

    handleChange = event =>{

        event.preventDefault();

        this.setState({[event.target.name]:event.target.value})

    }


    render(){

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        const { email, password} = this.state

        return(

            <>



                
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

                     {errorNotification}
                    </form>

          
                </div>

            </div>

            </>

        );
    }
}

export default Connexion;
