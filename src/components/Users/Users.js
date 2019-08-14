import React from 'react';
import ReactPaginate from 'react-paginate';
import UserItem from "./users-part/UserItem";
import './../../styles/Users.scss';

const Users = (props) => {

    const onSetCurrentPage = (currentPage) => {
        let currentPageNumber = currentPage.selected + 1;
        props.setCurrentPage (currentPageNumber);
        props.getUsers (currentPageNumber)
    };

    let pagesCount = Math.ceil (props.totalCount / props.pageCount),
        pageLink = [];

    for (let i = 1; i <= pagesCount; i++) {
        pageLink.push (i);
    }

    return (
        <div className="app-content">
            <div className="pagination-wrap">
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<span>...</span>}
                    breakClassName={"break-me"}
                    pageCount={pagesCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={props.pageCount}
                    onPageChange={onSetCurrentPage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    forcePage={props.currentPage - 1}
                />
            </div>
            {props.users.map (user => {
                return <UserItem key={user.id} {...user} />
            })}
        </div>
    );
};

export default Users;