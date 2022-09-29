import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../Constants/Constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [Movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("")
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err => {
      // alert("Network Error")
    })


  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (Id) => {
    console.log(Id);
    axios.get(`/movie/${Id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log("Array ");
      }
    })
  }
  return (
    <div className='row'>

      <h2 className='row-title'>{props.title}</h2>
      <div className="posters">
        {Movies.map((obj) =>
          <img key={obj.id} onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="" />
          

        )}



      </div>

      {urlId && <Youtube opts={opts} id videoId={urlId.key} />}
    </div>
  )
}

export default Rowpost