// Import necessary modules and components
import { siteConfig } from "@/config/site"; // Import site configuration
import { title, subtitle } from "@/lib/primitives"; // Import text styling functions

import { PostCardGrid, PostSearch } from "@/components/Post/"; // Import PostCardGrid, PostSearch component

// Define the Home component
export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <div className="block border-b pb-4">
        {/* Render the site name */}
        <h1 className={title({ size: "lg", class: "text-primary" })}>
          {siteConfig.name}
        </h1>
        {/* Render the site description */}
        <p className={subtitle({ class: "mt-4" })}>{siteConfig.description}</p>
      </div>

      {/* Render the PostSearch component */}
      <PostSearch />

      {/* Render the PostCardGrid component */}
      <PostCardGrid />
    </section>
  );
}
