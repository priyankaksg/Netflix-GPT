import { useState } from "react"
import Header from "./Header"

const Login=()=>{
  const [isSignInForm,setIsSignInForm]=useState(true);
  const togglefunction=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return(
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg" alt="logo" />
      </div>
        <form className="absolute bg-black flex flex-col  p-8 w-4/12 my-20 mx-auto right-0 left-0 bg-opacity-70">
          <h1 className="text-bold m-2 p-2 text-white text-3xl">{isSignInForm? "Sign In" : "Sign Up"}</h1>
    
        {!isSignInForm && (<input type="text" placeholder="Full Name" className=" font-bold m-2 p-4 border border-thin border-white text-white rounded-sm bg-black"></input>)}

        <input type="text" placeholder="Email or Mobile No" className="font-bold m-2 p-4 border border-thin border-white text-white bg-black rounded-sm"></input>
         
           <input type="password" placeholder="Password" className=" font-bold m-2 p-4 border border-thin border-white text-white rounded-sm bg-black"></input>

           <button className="m-4 p-2 text-white bg-red-500 rounded-sm font-bold">{isSignInForm? "Sign In" : "Sign Up"}</button>
           <h2 className="text-white font-bold text-center">OR</h2>
           
            <button className="m-4 p-2 text-white bg-gray-500 rounded-sm font-bold">Use a Sign-in code</button>

            <p className="m-4 p-2 text-white cursor-pointer " onClick={togglefunction}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered Sign In Now"}
              </p>
      </form>
    </div>
  )
}
export default Login