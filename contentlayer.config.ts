// External Dependencies
import fs from "fs";
import path from "path";

// Contentlayer Dependencies
import { defineDocumentType, makeSource } from "contentlayer/source-files";

// Get the current working directory
const root = process.cwd();

// Define the path to the directory containing posts
const postsPath = path.join(root, "posts");

// Define a document type named "Post"
const Post = defineDocumentType(() => ({
  name: "Post",
  // Define a file path pattern to match .mdx files within the content directory
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    // Define fields for the Post document
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    // Define a computed field "ttr" (time to read)
    ttr: {
      type: "number",
      // Calculate the time to read based on word count and words per minute
      resolve: (doc) =>
        Math.ceil(
          doc.body.raw.trim().split(/\s+/).length /
            parseInt(process.env.NEXT_PUBLIC_WPM || "220")
        ),
    },
    // Define a computed field "url" for generating post URLs
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

// Export the data source configuration
export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});
