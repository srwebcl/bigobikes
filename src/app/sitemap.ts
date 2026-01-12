import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://bigobikes.cl',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Add dynamic routes here if any
    ];
}
