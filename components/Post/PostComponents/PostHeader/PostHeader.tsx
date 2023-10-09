// Import the NextLink component from the specified path
import NextLink from "next/link";

// Import the React library
import React from "react";

// Import the Post type from the specified path
import { Post } from "@/.contentlayer/generated";

// Import the PostMeta component from the specified path
import { PostMeta } from "@/components/Post/PostComponents";

// Import the 'cx' utility function from the specified path
import { cx } from "@/lib/utils";

import { BsArrowLeft } from "react-icons/bs";

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
      <h1
        className={cx(
          "tracking-tight inline font-bold",
          "text-[2.5rem] text-primary mb-2"
        )}
      >
        {title}
      </h1>

      {/* Render metadata about the post */}
      <div className="flex flex-wrap items-center mb-2 gap-2">
        {/* Render post meta information (date and ttr) using the PostMeta component */}
        <PostMeta {...{ date, ttr }} />
      </div>

      {/* Render a link back to the home page */}
      <div className="block">
        {/* Create a link back to the home page using Next.js Link */}
        <NextLink
          href="/"
          className={cx(
            "inline-flex items-center no-underline cursor-pointer",
            "bg-slate-50 hover:bg-slate-100",
            "text-primary font-semibold text-sm ",
            "py-2 px-4 mb-2 rounded-lg"
          )}
        >
          <BsArrowLeft size={16} className="inline mr-1" />
          Go to Home
        </NextLink>
      </div>
    </header>
  );
};

export default PostHeader;
