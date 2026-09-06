export interface Collection {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    id: "living",
    number: "01",
    title: "Living",
    description:
      "Sofas, coffee tables, TV units and consoles designed around the way you live.",
    image: "https://i.ibb.co.com/Q3vGrGBs/hero2.avif",
  },
  {
    id: "bedroom",
    number: "02",
    title: "Bedroom",
    description:
      "Beds, wardrobes, dressing tables and bedside pieces crafted for comfort.",
    image: "https://i.ibb.co.com/PZNsq8Qk/Bedroom3.jpg",
  },
  {
    id: "dining",
    number: "03",
    title: "Dining",
    description:
      "Tables, chairs and cabinets created for memorable everyday moments.",
    image: "https://i.ibb.co.com/FbVLK21Q/Dining.avif",
  },
  {
    id: "bespoke",
    number: "04",
    title: "Bespoke",
    description:
      "Furniture made specifically for your space, dimensions and taste.",
    image: "https://i.ibb.co.com/JwcjmXWW/Bespoke.webp",
  },
];