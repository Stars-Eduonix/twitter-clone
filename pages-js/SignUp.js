import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebase.js";


const auth = getAuth(firebaseApp);

function signUp(email, password){
   createUserWithEmailAndPassword(auth,email, password)
   .then(success)
   .catch(err => console.log(err.message) )

   function success(response){
    console.log("User Created Sucessfully")
   }
   
    
}

let email = "abhi4@abhi.com"
let password = "12345678"
signUp(email, password)