import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebase.js";

const auth = getAuth(firebaseApp)

function signIn(email, password){
    signInWithEmailAndPassword(auth, email, password)
    .then((response) => console.log("User Logged In") )
    .catch((err) => console.log(err.message) )
}
let email = "abhi@abhi.com"
let password = "12345678"

signIn(email, password)