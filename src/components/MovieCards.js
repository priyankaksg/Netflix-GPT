import {IMG_CDN_URL} from "../utils/constants";
const MovieCards=({posterPath})=>{
  return(
     <div className="w-40 pr-4">
      <img src={IMG_CDN_URL+posterPath} alt="banner"/>
     </div>
  )
}
export default MovieCards;