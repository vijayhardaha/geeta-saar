// Import necessary modules and types
import React from "react";
import { Pagination } from "@nextui-org/pagination";

// Define the type of props that the PostPagination component expects
type PostPaginationProps = {
  totalPages: number; // The total number of pages
  currentPage: number; // The current active page
  setCurrentPage: (page: number) => void; // Function to set the current page
};

// Define the PostPagination component
const PostPagination: React.FC<PostPaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  // Render the Pagination component with provided props
  return totalPages > 1 && currentPage > 0 ? (
    <div className="flex items-center mt4">
      <Pagination
        disableCursorAnimation
        showControls
        size="lg"
        initialPage={1}
        total={totalPages}
        page={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  ) : (
    <></>
  );
};

export default PostPagination;
