// "use client" is a directive specific to Next.js for client-side code execution.
"use client";

// Import necessary modules and components
import React, { useState, useEffect } from "react";
import { getAllPosts as posts, postsPerPage as perPage } from "@/lib/posts";
import {
  PostPagination,
  NoContentFound,
  PostCard,
  PostSearch,
} from "@/components/Post";

// Define the PostCardGrid component
export default function PostCardGrid(): JSX.Element {
  // Define the number of posts per page and set the current page using React state
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState(posts);
  const [searchKeyword, setSearchKeyword] = useState<string>(""); // Initialize with an empty string

  // Update the articles whenever the searchKeyword changes
  useEffect(() => {
    const filteredArticles = posts.filter((article) => {
      // Use article instead of post
      const { title, description, body, tags } = article; // Use article instead of post
      return (
        title.includes(searchKeyword) ||
        description.includes(searchKeyword) ||
        body.raw.includes(searchKeyword) ||
        tags?.some((tag) => tag.includes(searchKeyword))
      );
    });
    setArticles(filteredArticles);
    setCurrentPage(1);
  }, [searchKeyword]);

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Filter the posts to display only those on the current page
  const currentPosts = articles.length
    ? articles.slice(startIndex, endIndex)
    : [];

  // Calculate the total number of pages based on the number of posts and posts per page
  const totalPages = articles.length ? Math.ceil(articles.length / perPage) : 0;

  // Render the component based on whether there are posts to display
  return posts?.length ? (
    <>
      {/* Render the PostSearch component */}
      <PostSearch onClick={setSearchKeyword} />
      {currentPosts?.length ? (
        <>
          <section className="flex flex-col">
            {/* Map and render each post as a PostCard component */}
            {currentPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </section>{" "}
          <PostPagination {...{ totalPages, currentPage, setCurrentPage }} />
        </>
      ) : (
        <NoContentFound />
      )}
      {/* Render the pagination component with the total number of pages, current page, and a function to set the current page */}
    </>
  ) : (
    // If there are no posts, render a NoContentFound component
    <NoContentFound />
  );
}
