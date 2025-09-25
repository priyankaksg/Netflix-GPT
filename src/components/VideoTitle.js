
const VideoTitle= ({title, overview})=>{
  return(
    <div className="w-screen h-screen  py-60 px-20 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl w-4/12 text-white">{title}</h1>
      <p className="text-sm py-5 w-1/4 text-white">{overview}</p>
      <div className="space-x-3">
        <button className="bg-white text-black px-4 py-2 font-bold rounded-lg hover:bg-opacity-70">▶️ Play</button>
        <button className="bg-white text-black px-4 py-2 font-bold rounded-lg hover:bg-opacity-70">ℹ️ More Info</button>
      </div>
    </div>
  )
}
export default VideoTitle;