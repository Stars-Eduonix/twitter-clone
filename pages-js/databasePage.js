import firebaseApp from "../firebase.js"; 

import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(firebaseApp);


function addData(){
    set(ref(db, "users/1") ,{
        id: 1,
        name: "John Doe",
        age: 20
    } )
}


addData()