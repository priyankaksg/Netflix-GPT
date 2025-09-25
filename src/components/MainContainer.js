import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VieoBackground";

const MainContainer=()=>{
const movies= useSelector((store)=> store.movies?.nowPlayingMovies);
//.....early return....
if(!movies) return;

const mainMovie=movies[0];
//console.log(mainMovie);
//original_title
const {title, overview, id}= mainMovie;

  return(
     <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
     </div>
  )
}
export default MainContainer;