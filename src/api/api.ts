import axios from 'axios'



const API_KEY = ""

export const api = axios.create({
  baseURL:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
})