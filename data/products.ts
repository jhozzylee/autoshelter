export interface Product {
  slug: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  image: string;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    slug: "toyota-corolla-oil-filter",
    name: "Toyota Corolla Oil Filter",
    category: "Filters",
    brand: "Toyota",
    price: "₦18,000",
    image: "/products/oil-filter.jpg",
    description:
      "A quality oil filter designed to help keep engine oil clean and support reliable engine performance.",
    inStock: true,
  },

  {
    slug: "toyota-corolla-brake-pads",
    name: "Toyota Corolla Brake Pads",
    category: "Brakes",
    brand: "Toyota",
    price: "₦45,000",
    image: "/products/brake-pads.jpg",
    description:
      "Quality replacement brake pads designed to provide reliable stopping performance and dependable everyday use.",
    inStock: true,
  },

  {
    slug: "toyota-corolla-air-filter",
    name: "Toyota Corolla Air Filter",
    category: "Filters",
    brand: "Toyota",
    price: "₦25,000",
    image: "/products/air-filter.jpg",
    description:
      "A replacement air filter designed to help maintain clean airflow and efficient engine performance.",
    inStock: true,
  },

  {
    slug: "car-battery-12v",
    name: "12V Car Battery",
    category: "Electrical",
    brand: "Universal",
    price: "₦120,000",
    image: "/products/car-battery.jpg",
    description:
      "A reliable automotive battery designed to provide dependable starting power and everyday performance.",
    inStock: true,
  },

  {
    slug: "automotive-radiator",
    name: "Automotive Radiator",
    category: "Cooling System",
    brand: "Universal",
    price: "₦185,000",
    image: "/products/radiator.jpg",
    description:
      "A quality radiator designed to support effective engine cooling and reliable vehicle performance.",
    inStock: true,
  },

  {
    slug: "alloy-wheel-set",
    name: "Alloy Wheel",
    category: "Wheels",
    brand: "Universal",
    price: "₦250,000",
    image: "/products/alloy-wheel.jpg",
    description:
      "A durable alloy wheel designed to combine dependable performance with a clean, modern appearance.",
    inStock: true,
  },

  {
    slug: "led-headlight",
    name: "LED Headlight",
    category: "Exterior",
    brand: "Universal",
    price: "₦95,000",
    image: "/products/led-headlight.jpg",
    description:
      "A modern LED headlight designed to provide improved visibility and a clean exterior finish.",
    inStock: true,
  },

  {
    slug: "engine-drive-belt",
    name: "Engine Drive Belt",
    category: "Engine Parts",
    brand: "Universal",
    price: "₦35,000",
    image: "/products/drive-belt.jpg",
    description:
      "A quality replacement drive belt designed for reliable engine operation and everyday performance.",
    inStock: true,
  },

  {
    slug: "car-floor-mats",
    name: "Premium Car Floor Mats",
    category: "Accessories",
    brand: "Universal",
    price: "₦65,000",
    image: "/products/floor-mats.jpg",
    description:
      "Durable floor mats designed to protect your vehicle interior while adding a clean and refined finish.",
    inStock: true,
  },
];