// External Dependencies
import clsx from "clsx";
import slugify from "@sindresorhus/slugify";
import { parseISO, format } from "date-fns";

// Export 'clsx' as 'cx' for convenience
export { slugify, clsx as cx };

/**
 * Formats a date string in the "MMM dd, yyyy" format.
 * @param {string} date - The date string to format.
 * @returns {string} The formatted date.
 */
export const formatDate = (date: string): string => {
  return format(parseISO(date), "MMM dd, yyyy");
};
