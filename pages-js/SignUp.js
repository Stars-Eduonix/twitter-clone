import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebaseApp from "../firebase.js";



let signUpForm = document.querySelector(".signup-form"); 


signUpForm.addEventListener("submit", signUp)


const auth = getAuth(firebaseApp);

function signUp(e){
   console.log("SignUp process started")
   e.preventDefault();
   let email = document.querySelector("#email").value; 
   let password = document.querySelector("#password").value;
   createUserWithEmailAndPassword(auth,email, password)
   .then(user => {
      console.log("User signup successfull")
      updateProfile(auth.currentUser, {
         displayName: document.querySelector("#name").value
      })
      .then(
         () => console.log("User Info Updated")
      )
      .catch(err => console.log(err.message) )
      
      })
   .catch(err => console.log(err.message) )

   
   
    
}

