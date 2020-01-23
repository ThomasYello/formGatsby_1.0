
import firebase from 'firebase'

const configuration = {
  apiKey: "AIzaSyAhNyYa1ILE9zHS8VwXp2CNwS2X9NfDjmU",
  authDomain: "formulairegatsby.firebaseapp.com",
  databaseURL: "https://formulairegatsby.firebaseio.com",
  projectId: "formulairegatsby",
  storageBucket: "formulairegatsby.appspot.com",
  messagingSenderId: "58044112785",
  appId: "1:58044112785:web:f2f05699f14f95d2f48430",
  measurementId: "G-WMR07DK9C7"
};

    const firebaseconfig = firebase.initializeApp(configuration);



export default firebaseconfig;