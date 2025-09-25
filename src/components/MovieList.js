import MovieCards from "./MovieCards";

const MovieList=({title, movies})=>{
  if(!movies) return;
  console.log(movies);
 
  return(
     <div className="px-6 w-full ">
       <h1 className="text-xl font-bold py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
        {movies.map((movie)=> 
            ( <MovieCards key={movie.id} posterPath={movie.poster_path}/>
            ) )}
         </div>
     </div>
     </div>
     
  )
}
export default MovieList;