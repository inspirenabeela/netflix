import React from 'react'
import "./Rowpost.css"
import { useEffect,useState } from 'react'
import axios from "../../axios"
import { API_KEY,imageUrl } from '../../const/constants'
import YouTube from 'react-youtube'
function Rowpost(props) {
  const [movies,setMovies]= useState([])
  const [urlId, setUrlId] = useState("")
 useEffect(() => {
  axios.get(props.url).then((resp)=>{
    console.log(resp.data)
    setMovies(resp.data.results)
  })
 }, [])
 const opts = {
  height: "390",
  width: "100%",
  playerVars:{
    autoplay: 1,
  },
};
  const handleMovies = (id)=>{
       console.log(id)
       axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((resp)=>{
             console.log(resp.data.results[0])
             if(resp.data.results.length!==0){
            setUrlId(resp.data.results[0])
          }
       })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj)=>
            <img onClick={()=>handleMovies(obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`}/>

          )}
        </div>
        { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>

  )
}

export default Rowpost