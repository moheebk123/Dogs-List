import propTypes from "prop-types";
import Pagination from "@mui/material/Pagination";

export default function PaginationBox({ handlePageChange }) {
  const getPage = (event, page) => {
    let newPage = page - 1;
    if (event.target.tagName !== "LI") {
      if (event.target.tagName === "svg" || event.target.tagName === "path") {
        let button = event.target.closest("button");
        if (button.ariaLabel === "Go to previous page") {
          newPage = Math.max(0, newPage);
        } else if (button.ariaLabel === "Go to next page") {
          newPage = Math.min(16 - 1, newPage);
        }
      }
    }
    handlePageChange(newPage);
  };

  return <Pagination count={16} color="primary" onChange={getPage} />;
}

PaginationBox.propTypes = {
  handlePageChange: propTypes.func.isRequired,
};
