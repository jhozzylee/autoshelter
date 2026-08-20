import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function fetchPartsFromSanity(searchTerm?: string) {
  // Broad GROQ query matching standard Sanity inventory structures
  const query = searchTerm
    ? `*[_type in ["product", "part", "parts", "inventory"] && (
        name match $term || 
        title match $term || 
        category match $term || 
        brand match $term
      )][0..3]{
        _id,
        "name": coalesce(name, title, "Auto Part"),
        price,
        brand,
        category,
        "slug": coalesce(slug.current, slug, _id),
        "imageUrl": coalesce(
          image.asset->url, 
          images[0].asset->url, 
          mainImage.asset->url, 
          thumbnail.asset->url
        )
      }`
    : `*[_type in ["product", "part", "parts", "inventory"]][0..3]{
        _id,
        "name": coalesce(name, title, "Auto Part"),
        price,
        brand,
        category,
        "slug": coalesce(slug.current, slug, _id),
        "imageUrl": coalesce(
          image.asset->url, 
          images[0].asset->url, 
          mainImage.asset->url, 
          thumbnail.asset->url
        )
      }`;

  const results = await sanityClient.fetch(query, {
    term: searchTerm ? `*${searchTerm}*` : "",
  });

  return results;
}