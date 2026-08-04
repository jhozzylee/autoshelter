import { defineQuery } from 'next-sanity'

// Query to get all vehicles
export const VEHICLES_QUERY = defineQuery(`
  *[_type == "vehicle"]{
    _id,
    name,
    "slug": slug.current,
    brand,
    model,
    year,
    type,
    price,
    "image": image.asset->url,
    "gallery": gallery[].asset->url,
    description,
    specifications
  }
`)

// Query to get all inventory parts
export const INVENTORY_QUERY = defineQuery(`
  *[_type == "inventory"]{
    _id,
    name,
    "slug": slug.current,
    category,
    brand,
    price,
    "image": image.asset->url,
    description,
    inStock
  }
`)

// Query to get a single vehicle by slug
export const VEHICLE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "vehicle" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    brand,
    model,
    year,
    type,
    price,
    "image": image.asset->url,
    "gallery": gallery[].asset->url,
    description,
    specifications
  }
`)