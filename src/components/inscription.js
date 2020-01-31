import React from "react"


import { Link, navigate } from "gatsby"




import firebaseconf from '../components/config'

class Inscription extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      form: [],
      nom: "",
      prenom: "",
      email: "",
      checked: true,
      password: ""
      
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




  handleSubmit = event => {
    event.preventDefault();
    if (this.state.checked === true){

    firebaseconf.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {

            const params = {
                nom: this.state.nom,
                prenom: this.state.prenom,
                email: this.state.email,
                password: this.state.password,
          
          
              };

            

            firebaseconf.database().ref('utilisateurs').push(params)
              

           })
          
           const {nom, prenom, email, form, password} = this.state
              
            navigate("/Confirm",
              {
                state: { nom, prenom, email, form, password }

              })
           
              
            } else {

              alert('Vous devez cocher nos conditions pour vous inscrire !')
            }
          }


  handleChange = event => {
    event.preventDefault();

    this.setState({ [event.target.name]: event.target.value })

  }

  handleCheckbox = () => {
    
    const check = !this.state.checked;

    this.setState({ checked: check })


  }

  render() {


    


    const { nom, prenom, email, checked, password } = this.state;


    return (

      <>
        

        


        <div className="wrapper">
          <h1>Mon formulaire</h1>
          <div className="from-wrapper">
            <form onSubmit={this.handleSubmit} >

              <div className="Nom">
                <label htmlFor="nom">Nom</label>
                <input onChange={this.handleChange} type='text' name='nom' value={nom} />

              </div>

              <div className="Prenom">
                <label htmlFor="prenom"> Prenom</label>
                <input onChange={this.handleChange} type='text' name='prenom' value={prenom} />

              </div>

              <div className="Email">
                <label htmlFor="email"> Email</label>
                <input onChange={this.handleChange} type='email' name='email' value={email} />

              </div>

              <div className="Email">
                <label htmlFor="password"> Mot de passe</label>
                <input onChange={this.handleChange} type='password' name='password' value={password} />

              </div>

              <div>
                <input type="checkbox" name="checked" onChange={this.handleCheckbox} checked={checked} />
                <label htmlFor="checked">J'accepte les conditions du site  </label>
                <p><small> Si vous avez déjà un compte, <Link to="/connexion"> cliquez ici.</Link></small></p>

              </div>
              

              <div className="bouton">
              
                <button onSubmit={this.handleSubmit}> Valider </button>
              </div>

            
            </form>


          
            
          </div>
              
           


        </div>
      </>

    )
  }
}

export default Inscription
