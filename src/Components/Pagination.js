import React from "react";

function Pagination({ prev, next, onPrev, onNext }) {
  function handlePrev() {
    onPrev(prev);
  }
  function handleNext() {
    onNext(next);
  }
  return (
    <nav className='my-5'>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrev}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Pagination;
