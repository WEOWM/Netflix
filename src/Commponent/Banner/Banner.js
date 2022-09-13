import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from "../../axios"
import './Banner.css'

function Banner() {
  const [Movie, setMovie] = useState();
  useEffect(()=>{
    axios.get(`discover/movie?api_key=${API_KEY}&with_genres=28`).then((response)=>{
      setMovie(response.data.results[3])
    })
  },[])
  return (

    <div>
          <div style=  {{backgroundImage:`url(${Movie? imageUrl+Movie.backdrop_path:""}) `}}
           className='banner'>
            <div className="content">
                <h1 className='title'>{Movie?Movie.title:""}</h1>
                <div className="banner_buttons">
                    <button className='button'>PLay</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='discription'>{Movie? Movie.overview:""}</h1>
            </div>
            <div className="fade_buttom"></div>
        </div>

    </div>
  )
}

export default Banner
