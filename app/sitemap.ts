import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: `${process.env.SITE_URL}`,
        priority: 1,
      },
    {
      url: `${process.env.SITE_URL}/Projects/Portfolio`,
      priority: 0.1,
    },
    {
        url: `${process.env.SITE_URL}/Projects/Buildify`,
        priority: 0.1,
      },
      {
        url: `${process.env.SITE_URL}/Projects/Server`,
        priority: 0.1,
      },
      {
        url: `${process.env.SITE_URL}/Projects/Library`,
        priority: 0.1,
      },
      {
        url: `${process.env.SITE_URL}`,
        priority: 0.1,
      },
  ];
}