import { initializeApp } from "firebase/app"; 

const firebaseConfig = {
    apiKey: "AIzaSyAJTcvBKdv4exRuooWIYRPgO9lXw6qe2Pc",
    authDomain: "twitter-clone-f1815.firebaseapp.com",
    projectId: "twitter-clone-f1815",
    storageBucket: "twitter-clone-f1815.appspot.com",
    messagingSenderId: "77788733326",
    appId: "1:77788733326:web:7415aa1033ff8fb5638edf",
    databaseURl: "https://twitter-clone-f1815-default-rtdb.firebaseio.com/"
  };

  const firebaseApp = initializeApp(firebaseConfig);


  export default firebaseApp