// "use client" is a directive specific to Next.js for client-side code execution.
"use client";

// Import necessary modules and components
import React, { useState } from "react";
import { getAllPosts as posts, postsPerPage as perPage } from "@/lib/posts";
import { PostPagination, NoContentFound, PostCard } from "@/components/Post";

// Define the PostCardGrid component
export default function PostCardGrid(): JSX.Element {
  // Define the number of posts per page and set the current page using React state
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Filter the posts to display only those on the current page
  const currentPosts = posts.length ? posts.slice(startIndex, endIndex) : [];

  // Calculate the total number of pages based on the number of posts and posts per page
  const totalPages = posts.length ? Math.ceil(posts.length / perPage) : 0;

  // Render the component based on whether there are posts to display
  return currentPosts?.length ? (
    <>
      <section className="flex flex-col">
        {/* Map and render each post as a PostCard component */}
        {currentPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </section>
      {/* Render the pagination component with the total number of pages, current page, and a function to set the current page */}
      <PostPagination {...{ totalPages, currentPage, setCurrentPage }} />
    </>
  ) : (
    // If there are no posts, render a NoContentFound component
    <NoContentFound />
  );
}
