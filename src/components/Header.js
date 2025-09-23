
import {signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{
  const navigate= useNavigate();
  const user= useSelector(store=> store.user);
  const handleSignOut= ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        // An error happened.
      });
  }

  return(
    <div className="absolute w- w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img 
    className="w-44 "
    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

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