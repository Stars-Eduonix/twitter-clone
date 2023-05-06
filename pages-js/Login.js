import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "../firebase.js";

const auth = getAuth(firebaseApp)

const provider = new GoogleAuthProvider();


let signInForm = document.querySelector(".signIn-form");
let googleButton = document.querySelector(".google-login");

signInForm.addEventListener("submit", signIn)

function signIn(e){
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((response) => console.log("User Logged In") )
    .catch((err) => console.log(err.message) )
}


googleButton.addEventListener("click", googleLogin)

function googleLogin(){
    signInWithPopup(auth, provider).then((result) => console.log("User Logged In") )
    .catch((err) => console.log(err.message) )
}


