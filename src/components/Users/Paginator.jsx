import React from "react";
import classUsers from './Users.module.css';
import { useState } from "react";

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {

    const [portion, setPortion] = useState(0); //current portion of pages
    let pagesCount = Math.ceil(totalUsersCount / pageSize); //all pages with value "pageSize" 
    let portionCount = Math.ceil(pagesCount / (pageSize * 2)); //how much portions with (pageSize * 2) pages
    let leftPageOfPortion = portion * (pageSize * 2) + 1;//first number of current portion
    let rightPageOfPortion = (portion + 1) * (pageSize * 2);//last number of current portion
    let pages = [];
    for (let i = leftPageOfPortion; i <= rightPageOfPortion; i++) { pages.push(i) };

    return <div className={classUsers.paginatorWrapper}>
        {portion > 0 &&
            <button onClick={() => { setPortion(portion - 1) }}>Previous</button>}

        {pages.map(p => {
            return (
                <span key={p}
                    className={currentPage === p ? classUsers.currentPage : classUsers.notCurrentPage}
                    onClick={() => { onPageChanged(p) }} > {p} </span>
            )
        })}

        <span key={pagesCount}
            className={currentPage === pagesCount ? classUsers.currentPage : classUsers.notCurrentPage}
            onClick={() => { onPageChanged(pagesCount) }} > {`... ${pagesCount}`} </span>

        {portion < portionCount &&
            <button onClick={() => { setPortion(portion + 1) }}>Next</button>}
    </div>
}

export default Paginator;