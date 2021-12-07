//26039f1f
import axios from "axios";
const instance = axios.create({
    baseURL: 'https://www.omdbapi.com/',
})


export const moviesApi = {
    getFilms () {
        return instance.get('?apikey=26039f1f&s=matrix');
    },
    searchFilms (filmName, page= 1) {
        return instance.get(`?apikey=26039f1f&s=${filmName}&page=${page}`);
    },
}