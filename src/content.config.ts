import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const statusTone = z.enum(["live", "pilot", "planned", "paused"]);

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "*.md" }),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		website: z.url().optional(),
		repository: z.url().optional(),
		status: z.object({
			label: z.string(),
			tone: statusTone,
		}),
		support: z.object({
			label: z.string(),
			href: z.url().optional(),
		}),
		sortOrder: z.number().int().nonnegative().default(0),
		featured: z.boolean().default(true),
		draft: z.boolean().default(false),
	}),
});

const devlogs = defineCollection({
	loader: glob({ base: "./src/content/devlogs", pattern: "*/*.md" }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		project: reference("projects"),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		sourceUrl: z.url().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { projects, devlogs };
