// Import site configuration from the specified path
import { siteConfig } from "@/config/site";

// Import the PostCardGrid component from the specified path
import { PostCardGrid } from "@/components/Post/";

// Import the 'cx' utility function from the specified path
import { cx } from "@/lib/utils";

// Define the Home component
export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <div className="block border-b pb-4 mb-3">
        {/* Render the site name */}
        <h1 className={cx("block font-bold text-5xl text-primary")}>
          {siteConfig.name}
        </h1>
        {/* Render the site description */}
        <p className="block my-2 text-default-600 text-md w-full leading-7 md:text-lg md:leading-8">
          {siteConfig.description}
        </p>
      </div>

      {/* Render the PostCardGrid component */}
      <PostCardGrid />
    </section>
  );
}
