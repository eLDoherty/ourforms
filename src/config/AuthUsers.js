import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app  } from "./FirebaseConfig";


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const userRegister = (email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert(userCredential);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert( errorMessage )
    });
}

export {userRegister};
