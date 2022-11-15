import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={range.length}
      pageRangeDisplayed={10}
      onChange={(e) => setPage(e)}
    />
  );
};

export default TableFooter;
