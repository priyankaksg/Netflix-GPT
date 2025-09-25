
import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header=()=>{
  const navigate= useNavigate();
  const user= useSelector(store=> store.user);
  const dispatch= useDispatch();

  const handleSignOut= ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
       
      }).catch((error) => {
        // An error happened.
      });
  }

   useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid:uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse");
      
      } else {
        // User is signed out
        dispatch(removeUser());
         navigate("/")
      }
    });
    //.....unsubscribe when component unmount......
    return() => unsubscribe();

  }, []);

  return(
    <div className="absolute w- w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img 
    className="w-44 "
    src={LOGO} alt="logo" />

    {user && (<div className="flex" onClick={handleSignOut}>
      {/* <img className="w-8 h-8 rounded-lg my-5 cursor-pointer" alt="userIcon" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" /> */}
      <img className="w-8 h-8 rounded-lg my-5 cursor-pointer" alt="userIcon" src={user?.photoURL} />
      <button className="font-bold text-white px-1" >(Sign Out)</button>
    </div>
   )}


    </div>
    
  )
}
export default Header;