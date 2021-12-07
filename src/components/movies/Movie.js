import React from 'react';
import c from "./movies.module.css";

const Movie = (props) => {
    return (
        <div className={c.card}>
            <div>
                <img src={props.poster} alt=''/>
            </div>
            <div className={c.description}>
                <span>{props.name}</span>
                <p>
                    {props.year}
                    <span className={c.right}>{props.type}</span>
                </p>
            </div>
        </div>
    );
};

export default Movie;