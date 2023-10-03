import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/slices/moviesSlice';

export default function PaginationComponent() {
    const dispatch = useDispatch();
    const totalPages = useSelector((state) => state.movies.totalPages);
    const currentPage = useSelector((state) => state.movies.page);
  
    const handlePageClick = (selectedPage) => {
      const page = selectedPage.selected + 1;
      dispatch(fetchMovies(page));
    };
  
    return (
      <div className='text-dark'>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          pageCount={totalPages}
          forcePage={currentPage - 1}
          previousLabel="< previous"
          containerClassName='pagination justify-content-center'
          pageClassName='page-item'
          pageLinkClassName='page-link text-dark'
          previousClassName='page-item'
          nextClassName='page-item'
          previousLinkClassName='page-link text-dark'
          nextLinkClassName='page-link text-dark'
          breakClassName='page-item'
          breakLinkClassName='page-link text-dark'
          activeClassName={"active"}
          activeLinkClassName='page-link text-light'
        />
      </div>
    );
  }