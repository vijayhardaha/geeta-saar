// Import necessary modules and components
import React from "react";
import { GoClock, GoCalendar } from "react-icons/go";
import { cx, formatDate } from "@/lib/utils";

// Define the type of props that the PostMeta component expects
type PostMetaProps = {
  date: string;
  ttr?: number;
};

// Define the PostMeta component
const PostMeta: React.FC<PostMetaProps> = ({ date, ttr }) => {
  // Define the meta icons size.
  const iconSize = 16;

  const wrapperClass =
    "text-brand font-heading text-sm flex items-center gap-1";
  const iconClass = "relative bottom-0.5";

  return (
    <>
      {/* Render post publication date if available */}
      {date && (
        <div className={cx(wrapperClass)}>
          {/* Render the clock icon */}
          <GoClock size={iconSize} className={cx(iconClass)} />

          {/* Render the publication date using the 'dateTime' attribute for accessibility */}
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
      )}

      {/* Render estimated reading time if available */}
      {ttr && (
        <div className={cx(wrapperClass)}>
          {/* Render the calendar icon */}
          <GoCalendar size={iconSize} className={cx(iconClass)} />

          {/* Render the estimated reading time */}
          <span> {`${ttr} Min Read`}</span>
        </div>
      )}
    </>
  );
};

export default PostMeta;
