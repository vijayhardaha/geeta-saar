import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { GoSearch } from "react-icons/go";
import { getAllPosts as posts } from "@/lib/posts";

// Define the type of props that the PostSearch component expects (if any).
// Since this component doesn't accept any props, we use an empty object.
type PostSearchProps = {};

// Define the PostSearch component.
const PostSearch: React.FC<PostSearchProps> = () => {
  // Create a search input element with specific configurations.
  return posts.length > 0 ? (
    <div className="flex flex-col">
      <p className="text-sm mb-2">Filter the results:</p>
      <div className="flex gap-2">
        <div className="grow">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
              <GoSearch className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
          />
        </div>
        <Button color="default" variant="ghost" className="shrink">
          Filter
        </Button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PostSearch;
