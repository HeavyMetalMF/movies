import React, {useEffect, useState} from 'react';
import Search from "./Search";
import Movies from "./Movies";
import {moviesApi} from "../../api/api";

const Main = (props) => {
    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState([]);
    const [searchFilm, setSearchFilm] = useState('matrix');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        moviesApi.getFilms().then(response => {
            setMovies(response.data.Search);
            setPages(Math.ceil(response.data.totalResults / 10));
        })
    }, []);
    // debugger
    return (
        !loading ?
        <div className="App container">
            <Search setLoading={setLoading} searchFilm={searchFilm} setSearchFilm={setSearchFilm} setPages={setPages} setMovies={setMovies}/>
            <Movies setLoading={setLoading} pages={pages} movies={movies} setMovies={setMovies} setPages={setPages} searchFilm={searchFilm}/>
        </div>
        : <div>loading</div>
    );
};

export default Main;