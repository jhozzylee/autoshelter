export interface Car {
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  type: "Gasoline" | "Electric" | "Hybrid";
  price: string;
  image: string;
  gallery: string[];
  description: string;
  specifications: {
    engine: string;
    transmission: string;
    mileage: string;
    doors: string;
    seats: string;
  };
}

export const cars: Car[] = [
  {
    slug: "2023-audi-A5",
    name: "Audi A5",
    brand: "Audi",
    model: "A5",
    year: 2023,
    type: "Gasoline",
    price: "₦85,000,000",
    image: "/vehicles/audi-a5.png",
    gallery: [
      "/vehicles/audi-a5.png",
      "/vehicles/audi-a5-side.png",
      "/vehicles/audi-a5-interior.png",
    ],
    description:
      "A refined SUV that combines everyday practicality with a premium driving experience. The Audi A5 offers a comfortable interior, confident performance, and the versatility needed for everyday life.",
    specifications: {
      engine: "2.0L Turbo",
      transmission: "Automatic",
      mileage: "25,000 km",
      doors: "4 Doors",
      seats: "5 Seats",
    },
  },

  {
    slug: "toyota-rav4",
    name: "Toyota RAV4",
    brand: "Toyota",
    model: "RAV4",
    year: 2024,
    type: "Gasoline",
    price: "₦72,000,000",
    image: "/vehicles/rav4.jpg",
    gallery: [
      "/vehicles/rav4.jpg",
      "/vehicles/rav4-side.jpg",
      "/vehicles/rav4-interior.jpg",
    ],
    description:
      "A spacious and capable SUV designed for comfortable family journeys, everyday driving, and long-distance travel.",
    specifications: {
      engine: "3.5L V6",
      transmission: "Automatic",
      mileage: "32,000 km",
      doors: "4 Doors",
      seats: "7 Seats",
    },
  },

  {
    slug: "mercedes-glc",
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    type: "Gasoline",
    price: "₦95,000,000",
    image: "/vehicles/glc.png",
    gallery: [
      "/vehicles/glc.png",
      "/vehicles/mercedes-glc-side.png",
      "/vehicles/mercedes-glc-interior.png",
    ],
    description:
      "A sophisticated sedan combining elegant design, advanced technology, and a refined driving experience.",
    specifications: {
      engine: "2.0L Turbo",
      transmission: "Automatic",
      mileage: "18,000 km",
      doors: "4 Doors",
      seats: "5 Seats",
    },
  },

  {
    slug: "tesla-model-y",
    name: "Tesla Model Y",
    brand: "Tesla",
    model: "Model Y",
    year: 2024,
    type: "Electric",
    price: "₦110,000,000",
    image: "/vehicles/tesla-model-y.png",
    gallery: [
      "/vehicles/tesla-model-y.png",
      "/vehicles/tesla-model-y-side.png",
      "/vehicles/tesla-model-y-interior.png",
    ],
    description:
      "A fully electric SUV built around efficiency, technology, practicality, and a modern driving experience.",
    specifications: {
      engine: "Electric",
      transmission: "Automatic",
      mileage: "12,000 km",
      doors: "4 Doors",
      seats: "5 Seats",
    },
  },

  {
    slug: "lexus-rx",
    name: "Lexus RX",
    brand: "Lexus",
    model: "RX",
    year: 2023,
    type: "Hybrid",
    price: "₦78,000,000",
    image: "/vehicles/lexus-rx.png",
    gallery: [
      "/vehicles/lexus-rx.png",
      "/vehicles/lexus-rx-side.png",
      "/vehicles/lexus-rx-interior.png",
    ],
    description:
      "A versatile hybrid SUV offering a balance of efficiency, comfort, practicality, and everyday capability.",
    specifications: {
      engine: "2.5L Hybrid",
      transmission: "Automatic",
      mileage: "21,000 km",
      doors: "4 Doors",
      seats: "5 Seats",
    },
  },

  {
    slug: "bmw-i4",
    name: "BMW i4",
    brand: "BMW",
    model: "i4",
    year: 2024,
    type: "Electric",
    price: "₦105,000,000",
    image: "/vehicles/bmw-i4.png",
    gallery: [
      "/vehicles/bmw-i4.png",
      "/vehicles/bmw-i4-side.png",
      "/vehicles/bmw-i4-interior.png",
    ],
    description:
      "A premium SUV with strong performance, a spacious cabin, and the driving dynamics expected from BMW.",
    specifications: {
      engine: "3.0L Turbo",
      transmission: "Automatic",
      mileage: "28,000 km",
      doors: "4 Doors",
      seats: "5 Seats",
    },
  },
];