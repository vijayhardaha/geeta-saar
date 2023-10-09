// Import necessary modules and components
import NextLink from "next/link";
import React from "react";
import { title as titleStyle } from "@/lib/primitives";
import { Post } from "@/.contentlayer/generated";
import { Prose, PostMeta } from "@/components/Post/PostComponents";

// Define the type of props that the PostHeader component expects
type PostHeaderProps = {
  post: Post;
};

// Define the PostHeader component
const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  // Destructure properties from the 'post' object
  const { title, date, ttr } = post;

  return (
      <header className="flex flex-col gap-1 border-b pb-2">
        {/* Render the post title */}
        <h1 className={titleStyle({ size: "md", class: "text-primary" })}>
          {title}
        </h1>

        {/* Render metadata about the post */}
        <div className="flex flex-wrap items-center mb-2 text-gray-400 text-xs font-medium gap-2">
          {/* Render post meta information (date and ttr) using the PostMeta component */}
          <PostMeta {...{ date, ttr }} />
        </div>

        {/* Render a link back to the home page */}
        <div className="block">
          <Prose>
            {/* Create a link back to the home page using Next.js Link */}
            <NextLink href="/" className="text-primary text-small">
              &larr; Back to Home
            </NextLink>
          </Prose>
        </div>
      </header>
  );
};

export default PostHeader;
