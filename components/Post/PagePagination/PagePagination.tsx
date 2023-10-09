// Import necessary modules and components
import React from "react";
import NextLink from "next/link";
import { cx } from "@/lib/utils"; // Assuming you have a 'cx' utility function
import { Post } from "@/.contentlayer/generated";

// Define the type of props that the PagePagination component expects
type PagePaginationProps = {
  prevPost?: Post | null; // Make prevPost optional and allow null
  nextPost?: Post | null; // Make nextPost optional and allow null
};

// Define a type for navigation direction, which can be "prev" or "next"
type NavigationDirection = "prev" | "next";

// Define the type for props expected by the renderNavigationItem function
type NavigationItemProps = {
  post?: Post | null; // An optional post of type Post or null
  direction: NavigationDirection; // The direction of navigation
};

// Define a function to render navigation items based on the provided post and direction
const renderNavigationItem = ({ post, direction }: NavigationItemProps) => {
  // Check if the post is not provided or is null, and return null if so
  if (!post) return null;

  return (
    // Render a div with appropriate styling based on the navigation direction
    <div className={cx(direction === "next" ? "col-start-2 text-right" : "")}>
      {/* Render a text indicating "Next" or "Previous" based on the direction */}
      <p
        className={cx(
          "mb-1 tracking-wider text-sm",
          "text-gray-500",
          "dark:text-gray-400"
        )}
      >
        {direction === "next" ? "Next" : "Previous"}
      </p>
      {/* Render a NextLink component with a link to the post and styling */}
      <NextLink
        href={post.url}
        className="font-bold text-gray-700 hover:text-primary"
      >
        {/* Render the post title with an arrow based on the direction */}
        {direction === "next" ? `${post.title} →` : `← ${post.title}`}
      </NextLink>
    </div>
  );
};

// Define the PagePagination component
const PagePagination: React.FC<PagePaginationProps> = ({
  prevPost,
  nextPost,
}) => {
  return prevPost || nextPost ? (
    // Render a navigation section with grid layout and navigation items
    <nav
      className={cx(
        "mt-8 pt-8 grid grid-cols-2 gap-8 border-t",
        "border-gray-200",
        "dark:border-gray-700"
      )}
    >
      {/* Render the previous navigation item */}
      {renderNavigationItem({ post: prevPost, direction: "prev" })}
      {/* Render the next navigation item */}
      {renderNavigationItem({ post: nextPost, direction: "next" })}
    </nav>
  ) : null;
};

export default PagePagination;
