import {API_KEY} from './Constants/Constants'
export const originals =`discover/tv?api_key=${API_KEY}&with_networks=213`
export const trending =`trending/all/week?api_key=${API_KEY}&language=en-US`
export const action =`discover/movie?api_key=${API_KEY}&with_genres=28`
export const ComedyMovies=`discover/movie?api_key=${API_KEY}&with_genres=35`
export const HorrorMovies =`discover/movie?api_key=${API_KEY}&with_genres=27`
export const ActionMovies =`discover/movie?api_key=${API_KEY}&with_genres=28`
export const RomanceMovies =`discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99`
export const Upcoming =`movie/upcoming?api_key=${API_KEY}&launguage-US&page=1`
export const TopRated =`movie/top_rated?api_key=${API_KEY}&launguage-US&page=1`
export const Popular =`movie/popular?api_key=${API_KEY}&launguage=en-US&page=1`


