import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login=()=>{
  const [isSignInForm,setIsSignInForm]=useState(true);
 
  const [errorMessage, setErrorMessage]=useState();
   const navigate= useNavigate();
   const dispatch= useDispatch();
 
  const name=useRef(null);
  const email=useRef(null);
  const password= useRef(null);

  const handleClick=()=>{
    // console.log(email);
    //  console.log(name);
    var fullName ;
   
    isSignInForm? (fullName= "Priyanka") : (fullName = name.current.value)
  const message= checkValidData(fullName, email.current.value, password.current.value);
   setErrorMessage(message);
   // if there is any validation error return, else go to sign In  
    if(message) return;
    //..creating user.......
    if(!isSignInForm){
      // Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

            //...........update profile url.....
            updateProfile(user, {
              displayName: fullName,
             photoURL: "https://avatars.githubusercontent.com/u/210345971?s=48&v=4"
            }).then(() => {
              // Profile updated!
               const {uid, email, displayName, photoURL } = auth.currentUser;
                   dispatch(addUser({
                            uid:uid, email: email, displayName: displayName, photoURL: photoURL})
                              );
             
              navigate("/browse");
              
            }).catch((error) => {
              setErrorMessage(error.Message);
            });

            //........................


          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
         
        });
    }
    else{
      //Sign In Logic
        signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage);
        });
    }
   


  }

   const togglefunction=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return(
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg" alt="logo" />
      </div>

        <form onSubmit={(e)=> e.preventDefault()} 
          className="absolute bg-black flex flex-col  p-8 w-3/12 my-20 mx-auto right-0 left-0 bg-opacity-70">
          <h1 className="text-bold m-2 p-2 text-white text-3xl">{isSignInForm? "Sign In" : "Sign Up"}</h1>
    
           {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className=" font-bold m-2 p-4 border border-thin border-white text-white rounded-sm bg-black"></input>)}

          <input ref={email} type="text" placeholder="Email or Mobile No" className="font-bold m-2 p-4 border border-thin border-white text-white bg-black rounded-sm"></input>
         
           <input ref={password} type="password" placeholder="Password" className=" font-bold m-2 p-4 border border-thin border-white text-white rounded-sm bg-black"></input>

           <p className="text-red-500 mx-2">{errorMessage}</p>

           <button  className="m-4 p-2 text-white bg-red-500 rounded-sm font-bold" onClick={handleClick} >
            {isSignInForm? "Sign In" : "Sign Up"} </button>       

           <h2 className="text-white font-bold text-center">OR</h2>

            <button className="m-4 p-2 text-white bg-gray-500 rounded-sm font-bold">Use a Sign-in code</button>

            <p className="m-4 p-2 text-white cursor-pointer " onClick={togglefunction}>
              {isSignInForm? "New to Netflix? Sign Up Now" : "Already registered Sign In Now"}
              </p>
      </form>
    </div>
  )
}
export default Login