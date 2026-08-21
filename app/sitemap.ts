import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { services } from "@/data/services";

const SITEMAP_QUERY = `{
  "inventory": *[
    _type == "inventory" &&
    defined(slug.current)
  ]{
    "slug": slug.current,
    _updatedAt
  },

  "vehicles": *[
    _type == "vehicle" &&
    defined(slug.current)
  ]{
    "slug": slug.current,
    _updatedAt
  }
}`;

interface SanityDocument {
  slug: string;
  _updatedAt: string;
}

interface SitemapData {
  inventory: SanityDocument[];
  vehicles: SanityDocument[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://auto-shelter.com";

  // ----------------------------------------
  // STATIC PUBLIC PAGES
  // ----------------------------------------

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/inventory`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vehicles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/membership`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/request`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ----------------------------------------
  // FETCH SANITY CONTENT
  // ----------------------------------------

  let data: SitemapData = {
    inventory: [],
    vehicles: [],
  };

  try {
    data = await client.fetch<SitemapData>(SITEMAP_QUERY);
  } catch (error) {
    console.error("Error fetching sitemap data from Sanity:", error);
  }

  // ----------------------------------------
  // INVENTORY DYNAMIC PAGES
  // /inventory/[slug]
  // ----------------------------------------

  const inventoryRoutes: MetadataRoute.Sitemap = data.inventory.map(
    (item) => ({
      url: `${baseUrl}/inventory/${item.slug}`,
      lastModified: new Date(item._updatedAt),
      changeFrequency: "daily",
      priority: 0.8,
    })
  );

  // ----------------------------------------
  // VEHICLE DYNAMIC PAGES
  // /vehicles/[slug]
  // ----------------------------------------

  const vehicleRoutes: MetadataRoute.Sitemap = data.vehicles.map(
    (vehicle) => ({
      url: `${baseUrl}/vehicles/${vehicle.slug}`,
      lastModified: new Date(vehicle._updatedAt),
      changeFrequency: "daily",
      priority: 0.8,
    })
  );

  // ----------------------------------------
  // SERVICE DYNAMIC PAGES
  // /services/[slug]
  // ----------------------------------------

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // ----------------------------------------
  // RETURN COMPLETE SITEMAP
  // ----------------------------------------

  return [
    ...staticRoutes,
    ...inventoryRoutes,
    ...vehicleRoutes,
    ...serviceRoutes,
  ];
}