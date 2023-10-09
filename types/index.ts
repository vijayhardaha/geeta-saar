// Import the 'SVGProps' type from the 'react' package.
import { SVGProps } from "react";

// Define a type 'IconSvgProps' for SVG components with an optional 'size' property.
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// Define a type 'SiteConfig' for site configuration information.
export type SiteConfig = {
  // The name of the site.
  name: string;

  // A brief description of the site.
  description: string;

  // An optional avatar image URL.
  avatar?: string;

  // An optional URL for the site.
  url?: string;

  // Optional links to external resources (e.g., GitHub and Twitter profiles).
  links?: {
    // GitHub profile link.
    github?: string;

    // Twitter profile link.
    twitter?: string;
  };
};

// Define a type 'MDXFrontMatter' for front matter information typically used in MDX files.
export type MDXFrontMatter = {
  // The slug for the MDX content.
  slug: string;

  // The title of the MDX content.
  title: string;

  // An optional description for the MDX content.
  description?: string;

  // The date associated with the MDX content.
  date: string;

  // An optional array of tags for categorizing the MDX content.
  tags?: Array<string>;
};
