import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const SITEMAP_PRODUCTS_QUERY = `*[_type == "product"]{
  "slug": slug.current,
  _updatedAt
}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://auto-shelter.com";

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/vehicles",
    "/inventory",
    "/services",
    "/booking",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Sanity Product Routes
  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const products = await client.fetch(SITEMAP_PRODUCTS_QUERY);
    productRoutes = products.map((product: { slug: string; _updatedAt: string }) => ({
      url: `${baseUrl}/inventory/${product.slug}`,
      lastModified: new Date(product._updatedAt),
      changeFrequency: "daily" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching sitemap products from Sanity:", error);
  }

  return [...staticRoutes, ...productRoutes];
}