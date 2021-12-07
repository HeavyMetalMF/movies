import React, {useState} from "react";
import c from "../movies/movies.module.css";

const Paginator = (props) => {
    let pagesArray = [];
    for (let i = 1; i <= props.pages; i++){
        pagesArray.push(i);
    }
    let portionCount = Math.ceil(pagesArray.length / 10);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * 10 + 1;
    // let leftPortionPageNumber2 = (portionNumber * props.portionSize) - 5;
    let rightPortionNumber = portionNumber * 10;

    return (
        <div>
            {portionNumber > 1 ? <button onClick={() => {setPortionNumber(portionNumber-1)}}>Назад</button>: ''}

            {pagesArray.filter(page => {
                return page >= leftPortionPageNumber && page <= rightPortionNumber
            })
                .map(page => <span onClick={() => {props.search(props.searchFilm, page)}} className={c.page}>{page}</span>)}
            {portionCount > portionNumber ? <button onClick={() => {setPortionNumber(portionNumber+1)}}>Вперед</button> : ''}
        </div>
    )
}
export default Paginator;