// Import necessary modules and types
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

// Sort and retrieve all posts by their publication date
export const getAllPosts: Post[] = allPosts.sort((a: Post, b: Post) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

// Define the number of posts to display per page
export const postsPerPage: number = 2;
