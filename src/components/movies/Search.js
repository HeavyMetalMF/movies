import React, {useState} from 'react';
import c from './movies.module.css'
import {moviesApi} from "../../api/api";

const Search = (props) => {
    // const [searchFilm, setSearchFilm] = useState('');
    const [type, setType] = useState('all');
    const search = (str) => {
        props.setLoading(true);
        moviesApi.searchFilms(str,1).then(response => {
            if (response.data.Response !== 'False'){
                props.setMovies(response.data.Search);
                props.setLoading(false);
                props.setPages(Math.ceil(response.data.totalResults / 10));
            }else {
                props.setMovies([]);
                props.setLoading(false);
            }
            // debugger
        })
    }

    const filterMovies = (e) => {
        setType(e.target.dataset.type);
    }
    return (
        <>
            <div className={c.search}>
                <input onChange={(e) => {props.setSearchFilm(e.target.value)}}/>
                <button onClick={() => {search(props.searchFilm)}}>SEARCH</button>
            </div>
            <div className={c.radioBlock}>
                <label>
                    <input type="radio" data-type='all' checked={type === 'all'} onChange={filterMovies}/>
                    <span>ALL</span>
                </label>
                <label>
                    <input type="radio" data-type='movies' checked={type === 'movies'} onChange={filterMovies}/>
                    <span>Movies only</span>
                </label>
                <label>
                    <input type="radio" data-type='series' checked={type === 'series'} onChange={filterMovies}/>
                    <span>Series only</span>
                </label>
            </div>
        </>
    );
};

export default Search;