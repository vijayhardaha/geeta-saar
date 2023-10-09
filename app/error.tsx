"use client";

// Import necessary modules and components
import { useEffect } from "react";

// Define the Error component
export default function Error({
  error,
  reset,
}: {
  error: Error; // Type declaration for the 'error' prop
  reset: () => void; // Type declaration for the 'reset' prop
}) {
  // Use an effect to log the error to an error reporting service
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() =>
          // Attempt to recover by trying to re-render the segment
          reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
