import React, {useState} from 'react';
import c from './movies.module.css'
import Movie from "./Movie";
import {moviesApi} from "../../api/api";
import Paginator from "../paginator/Paginator";


const Movies = (props) => {
    // console.log(props.movies)

    const search = (str, page) => {
        props.setLoading(true);
        moviesApi.searchFilms(str, page).then(response => {
            props.setMovies(response.data.Search);
            props.setPages(Math.ceil(response.data.totalResults / 10));
            props.setLoading(false);
            // debugger
        })
    }

    return (
        <div>
            <div>
                {/*{pagesArray.map(page => <span onClick={() => {search(props.searchFilm, page)}} className={c.page}>{page}</span>)}*/}
                <Paginator search={search} pages={props.pages} searchFilm={props.searchFilm}/>
            </div>
            <div className={c.movies}>
                {props.movies.length ?
                    props.movies.map(movie => {
                        return <Movie key={movie.imdbID}
                                  poster={movie.Poster}
                                  name={movie.Title}
                                  year={movie.Year}
                                  type={movie.Type}/>
                    }) : <div>nothing</div>}
            </div>
        </div>
    );
};


export default Movies;