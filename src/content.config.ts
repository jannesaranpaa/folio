import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
    loader: glob({
        base: "./src/content/projects",
        pattern: "**/*.{md,mdx}",
        // Keep directory prefix in entry IDs (e.g. "en/fuksiseikkailu")
        generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        featured: z.boolean().default(false),
        stack: z.array(z.string()),
        created: z.coerce.date(),
        updated: z.coerce.date(),
    })
});

const skills = defineCollection({
    loader: file("src/data/skills.json"),
});

export const collections = { projects, skills };
