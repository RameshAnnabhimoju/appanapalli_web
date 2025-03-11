import { Pagination } from "react-bootstrap";
import { pagenationTypes } from "../../types/dashboardTypes";
import "./PagenationComponent.css";
const PagenationComponent = ({
  donationsData,
  handlePageChange,
  currentPage,
  totalPages,
}: pagenationTypes) => {
  return (
    <>
      {donationsData?.length > 0 && (
        <Pagination id="dashboard-pagination">
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />

          {currentPage > 3 && <Pagination.Ellipsis />}

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            if (
              pageNumber >= currentPage - 2 &&
              pageNumber <= currentPage + 2
            ) {
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={pageNumber === currentPage}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            }
            return null;
          })}

          {currentPage < totalPages - 2 && <Pagination.Ellipsis />}

          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      )}
    </>
  );
};

export default PagenationComponent;
