import app from '../firebase/firebase.init'
import { useState } from 'react';
import { GoogleAuthProvider,  signInWithPopup, getAuth , signOut} from "firebase/auth";
export default function Login() {
   const [user, getUser] = useState()
   
   const provider = new GoogleAuthProvider();
   const auth = getAuth(app);
  
   const handleClick = () => {
      signInWithPopup(auth, provider)
         .then(result => {
            const loggedInUser = result.user;
            getUser(loggedInUser)
            console.log(loggedInUser)
         }
            
            )
         .catch(error => {
            const errorMessage = error.message;
         console.log(errorMessage)
         })
      
   }
   const logOutProfile = () => {
      signOut(auth).then((result) => {
         console.log(result)
         getUser(null)
  
}).catch((error) => {
    const errorMessage = error.message;
         console.log(errorMessage)
});

   }
  return (
     <div>
        {
           user ? <button onClick={logOutProfile}>Log out</button>
: <button onClick={handleClick}>Log in </button>
        }
       

        <div>
           {user && <div> <h1>user: {user.displayName}</h1>
              <p>email : {user.email}</p></div>
              
           }
        </div>
    </div>
  )
}
