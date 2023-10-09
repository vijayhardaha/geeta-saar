// Import the 'cx' function from the 'utils' module
import { cx } from "@/lib/utils";

// Define the type of props that the PostTags component expects
interface PostTagProps {
  tags: string[];
}

// Define the PostTags component
const PostTags: React.FC<PostTagProps> = ({ tags }) => {
  return tags?.length ? (
    <div className="flex flex-row flex-wrap items-center gap-2">
      {/* Map and render each tag as a styled div element */}
      {tags.map((tag, index) => (
        <div
          key={index}
          className={cx(
            // Apply CSS classes based on conditions using 'cx'
            "inline-block text-sm py-1 px-2 rounded-lg border",
            "bg-gray-50 border-gray-300",
            "dark:bg-gray-800 dark:border-gray-700"
          )}
        >
          {/* Display the tag text */}
          {tag}
        </div>
      ))}
    </div>
  ) : (
    // Render an empty fragment if there are no tags
    <></>
  );
};

export default PostTags;
