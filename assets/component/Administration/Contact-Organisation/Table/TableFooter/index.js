import React, { useEffect } from "react";
import "./TableFooter.module.css";
import Pagination from "react-js-pagination";
const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={range.length}
        pageRangeDisplayed={5}
        onChange={(e) => setPage(e)}
      />
      {/* {range.map((el, index) => (
        <button
          key={index}
          style={{ marginRight: "1rem" }}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))} */}
    </div>
  );
};

export default TableFooter;
