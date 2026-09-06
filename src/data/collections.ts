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
    image: "/images/Living17.jpg",
  },
  {
    id: "bedroom",
    number: "02",
    title: "Bedroom",
    description:
      "Beds, wardrobes, dressing tables and bedside pieces crafted for comfort.",
    image: "/images/Bedroom11.jpg",
  },
  {
    id: "dining",
    number: "03",
    title: "Dining",
    description:
      "Tables, chairs and cabinets created for memorable everyday moments.",
    image: "/images/Dining5.jpg",
  },
  {
    id: "bespoke",
    number: "04",
    title: "Bespoke",
    description:
      "Furniture made specifically for your space, dimensions and taste.",
    image: "/images/Office3.jpg",
  },
];