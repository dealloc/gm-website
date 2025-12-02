import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const campaigns = defineCollection({
    loader: glob({base: './content/campaigns', pattern: '**/*.{md,mdx}'}),
    schema: ({image}) =>
        z.object({
            // Core Information
            title: z.string(),
            description: z.string(),

            // Classification
            campaignType: z.enum(['adventure-path', 'one-shot', 'custom']),
            levelRange: z.object({
                min: z.number().min(1).max(20),
                max: z.number().min(1).max(20),
            }),

            // Metadata
            tags: z.array(z.string()),
            publisher: z.string().optional(),

            // Imagery
            heroImage: image(),
            thumbnailImage: image().optional(),

            // Status & Availability
            status: z.enum(['available', 'full', 'upcoming', 'archived']).default('available'),

            // Booking Info
            playersMin: z.number().default(3),
            playersMax: z.number().default(6),

            // SEO
            seoDescription: z.string().optional(),
            publishDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
        }),
});

export const collections = {campaigns};
