// Import necessary modules and components
import React from "react";
import { getMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";
import { PostHeader, Prose, PostTags } from "@/components/Post/PostComponents";
import { NoContentFound, PagePagination } from "@/components/Post";

// Define the function to generate static parameters
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

// Define the 'Params' type for generateMetadata function
interface Params {
  slug: string;
}

// Define the function to generate metadata
export const generateMetadata = ({
  params,
}: {
  params: Params;
}): { title: string } => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post?.title || "" };
};

// Define the PostLayout component
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post =
    allPosts.find((post) => post._raw.flattenedPath === params.slug) || null;

  if (post === null) {
    // If there are no posts, render a NoContentFound component
    return <NoContentFound />;
  }

  const currentIndex = allPosts.findIndex(
    (post) => post._raw.flattenedPath === params.slug
  );

  if (currentIndex === -1) {
    // If there are no posts, render a NoContentFound component
    return <NoContentFound />;
  }

  const nextIndex = currentIndex + 1;
  const prevIndex = currentIndex - 1;

  const nextPost = nextIndex < allPosts.length ? allPosts[nextIndex] : null;
  const prevPost = prevIndex >= 0 ? allPosts[prevIndex] : null;

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="flex flex-col gap-4">
      <PostHeader post={post} />

      <div className="content flex-flex-col">
        <Prose>
          <Content />
        </Prose>
      </div>

      <footer>
        {post?.tags?.length && <PostTags tags={post.tags} />}

        <PagePagination {...{ nextPost, prevPost }} />
      </footer>
    </article>
  );
};

export default PostLayout;
