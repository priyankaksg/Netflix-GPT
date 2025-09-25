import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer=()=>{
  const movies= useSelector(store=> store.movies);
  //if(!movies) return;
  console.log(movies);
  return(
     <div className="bg-black">
      <div className="-mt-40 pl-6 relative z-20 " >
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
       <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
      
       </div>
     </div>
  )
}
export default SecondaryContainer;