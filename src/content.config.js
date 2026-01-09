// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

// 4. Define your collection(s)
const book_reviews = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/book_reviews" }),
  schema: z.object({
    uri: z.string(),
    title: z.string(),
    authors: z.string(),
    rating: z.coerce.number().min(0).max(10),
    timesReadCount: z.number(),
  }),
});
// 5. Export a single `collections` object to register your collection(s)
export const collections = { book_reviews };
