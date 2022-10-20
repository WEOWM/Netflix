import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import axios from "../../axios"
import './Banner.css'

function Banner() {
  const [Movie, setMovie] = useState([]);

  const Movies = Movie[Math.floor(Math.random() + Movie.length)]

  useEffect(() => {
    axios.get(`movie/upcoming?api_key=${API_KEY}&launguage-US&page=1`).then((response) => {
      setMovie(response.data.results)
    })
  }, [])
  console.log(Movies);
  return (

    <div className='row'>
      <div className='col'>

        <div style={{ backgroundImage: `url(${Movies ? imageUrl + Movies.backdrop_path : ""}) ` }}
          className='banner'>
          <div className="content">
            <h1 className='title'>{Movies ? Movies.title : ""}</h1>
            <div className="banner_buttons">
              <button className='button '>PLay</button>
              <button className='button'>My List</button>
            </div>
            <p className='release'>Released: {Movies?.release_date}</p>
            <h1 className='discription'>{Movies ? Movies.overview : ""}</h1>
          </div>
          <div className="fade_buttom"></div>
        </div>

      </div>
    </div>
  )
}

export default Banner
