import React from "react";
import Link from "next/link";
import { Post } from "contentlayer/generated";
import { Prose, PostTags, PostMeta } from "@/components/Post/PostComponents";

// Define the props interface for the PostCard component
interface IProps {
  post: Post;
}

// Define the PostCard component
export default function PostCard({ post }: IProps): JSX.Element {
  // Destructure properties from the 'post' object
  const { title, date, url, description, ttr, tags } = post;

  return (
    <article className="contents">
      <div className="flex flex-col border-b-2 gap-y-2 py-5 mb-2">
        {/* Create a link to the post using Next.js Link */}
        <Link
          href={url}
          className="flex flex-col break-words border-text/10 gap-y-2 justify-center duration-300 ease-in-out transition-all"
        >
          {/* Render the post title */}
          <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-primary">
            {title}
          </h3>

          <div className="flex flex-row space-x-3">
            {/* Render the post meta information (date and ttr) */}
            <PostMeta {...{ date, ttr }} />
          </div>

          <div className="flex flex-col gap-2">
            {/* Render the post description */}
            <Prose>
              <p>{description}</p>
            </Prose>
          </div>
        </Link>

        {/* Render post tags if available */}
        {tags && <PostTags tags={tags} />}
      </div>
    </article>
  );
}
