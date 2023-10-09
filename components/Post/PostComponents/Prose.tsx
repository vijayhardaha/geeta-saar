import React from "react";

// Define the Prose component as a functional component
const Prose: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="max-w-none prose prose-a:text-primary-600 dark:prose-invert">
      {children}
    </div>
  );
};

export default Prose;
