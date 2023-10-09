// Import the React library
import React from "react";

// Import the 'cx' utility function from the specified path
import { cx } from "@/lib/utils";

// Define the Prose component as a functional component
const Prose: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      className={cx(
        "max-w-none prose",
        "prose-a:text-primary",
        "prose-p:text-default-900",
        "prose-headings:text-primary",
      )}
    >
      {children}
    </div>
  );
};

export default Prose;
