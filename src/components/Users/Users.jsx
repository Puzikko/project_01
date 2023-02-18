import React from "react";
import Paginator from "./Paginator";
import UsersPaginator from "./UsersPaginator";

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, isButtonDisable, follow, unfollow }) => {
    return <>
        <Paginator totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged} />

        <UsersPaginator users={users}
            isButtonDisable={isButtonDisable}
            follow={follow}
            unfollow={unfollow} />
    </>
}

export default Users;