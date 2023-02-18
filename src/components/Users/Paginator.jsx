import React from "react";
import classUsers from './Users.module.css';
import { useState } from "react";

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {

    const [portion, setPortion] = useState(0);
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let portionCount = Math.ceil(pagesCount / (pageSize * 2));
    let leftPageOfPortion = portion * (pageSize * 2) + 1;
    let rightPageOfPortion = (portion + 1) * (pageSize * 2);
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