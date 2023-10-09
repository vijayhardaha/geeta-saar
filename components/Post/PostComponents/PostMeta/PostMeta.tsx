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

  const wrapperClass = [
    "flex flex-row items-center",
    "gap-1 uppercase ",
    "text-default-500 text-sm font-bold tracking-wide",
  ];

  return (
    <>
      {/* Render post publication date if available */}
      {date && (
        <div className={cx(wrapperClass)}>
          {/* Render the calendar icon */}
          <GoCalendar size={iconSize}/>

          {/* Render the publication date using the 'dateTime' attribute for accessibility */}
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
      )}

      {/* Render estimated reading time if available */}
      {ttr && (
        <div className={cx(wrapperClass)}>
          {/* Render the clock icon */}
          <GoClock size={iconSize}/>

          {/* Render the estimated reading time */}
          <span> {`${ttr} Min Read`}</span>
        </div>
      )}
    </>
  );
};

export default PostMeta;
