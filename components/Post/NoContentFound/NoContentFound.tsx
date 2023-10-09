// Import necessary modules if needed

// Define the NoContentFound component
export default function NoContentFound() {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Render a heading */}
      <h2 className="text-3xl font-bold text-red-400 md:text-4xl">
        Sorry, no posts were found...
      </h2>

      {/* Render a paragraph with a message */}
      <p>
        Please try searching again or using one of the category or tag filters
        to find more awesome content. 😀
      </p>
    </div>
  );
}
