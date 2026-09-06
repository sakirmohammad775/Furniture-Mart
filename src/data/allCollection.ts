export type CollectionCategory =
  | "All"
  | "Dining"
  | "Living"
  | "Bedroom"
  | "Bespoke";

export interface CollectionItem {
  id: string;
  title: string;
  category: Exclude<CollectionCategory, "All">;
  image: string;
}

export const allCollections: CollectionItem[] = [
  // =========================================================
  // DINING
  // =========================================================
  {
    id: "dining-01",
    title: "Dining Collection 01",
    category: "Dining",
    image: "/images/Dining1.jpg",
  },
  {
    id: "dining-02",
    title: "Dining Collection 02",
    category: "Dining",
    image: "/images/Dining2.jpg",
  },
  {
    id: "dining-03",
    title: "Dining Collection 03",
    category: "Dining",
    image: "/images/Dining3.jpg",
  },
  {
    id: "dining-04",
    title: "Dining Collection 04",
    category: "Dining",
    image: "/images/Dining4.jpg",
  },
  {
    id: "dining-05",
    title: "Dining Collection 05",
    category: "Dining",
    image: "/images/Dining5.jpg",
  },
  {
    id: "dining-06",
    title: "Dining Collection 06",
    category: "Dining",
    image: "/images/Dining6.jpg",
  },

  // =========================================================
  // LIVING
  // =========================================================
  {
    id: "living-01",
    title: "Living Collection 01",
    category: "Living",
    image: "/images/Living1.jpg",
  },
  {
    id: "living-02",
    title: "Living Collection 02",
    category: "Living",
    image: "/images/Living2.jpg",
  },
  {
    id: "living-03",
    title: "Living Collection 03",
    category: "Living",
    image: "/images/Living3.jpg",
  },
  {
    id: "living-04",
    title: "Living Collection 04",
    category: "Living",
    image: "/images/Living4.jpg",
  },
  {
    id: "living-05",
    title: "Living Collection 05",
    category: "Living",
    image: "/images/Living5.jpg",
  },
  {
    id: "living-06",
    title: "Living Collection 06",
    category: "Living",
    image: "/images/Living6.jpg",
  },

  // =========================================================
  // BEDROOM
  // =========================================================
  {
    id: "bedroom-01",
    title: "Bedroom Collection 01",
    category: "Bedroom",
    image: "/images/Bedroom1.jpg",
  },
  {
    id: "bedroom-02",
    title: "Bedroom Collection 02",
    category: "Bedroom",
    image: "/images/Bedroom2.jpg",
  },
  {
    id: "bedroom-03",
    title: "Bedroom Collection 03",
    category: "Bedroom",
    image: "/images/Bedroom3.jpg",
  },
  {
    id: "bedroom-04",
    title: "Bedroom Collection 04",
    category: "Bedroom",
    image: "/images/Bedroom4.jpg",
  },
  {
    id: "bedroom-05",
    title: "Bedroom Collection 05",
    category: "Bedroom",
    image: "/images/Bedroom5.jpg",
  },
  {
    id: "bedroom-06",
    title: "Bedroom Collection 06",
    category: "Bedroom",
    image: "/images/Bedroom6.jpg",
  },

  // =========================================================
  // BESPOKE
  // =========================================================
  {
    id: "bespoke-01",
    title: "Bespoke Collection 01",
    category: "Bespoke",
    image: "/images/Bespoke1.jpg",
  },
  {
    id: "bespoke-02",
    title: "Bespoke Collection 02",
    category: "Bespoke",
    image: "/images/Bespoke2.jpg",
  },
  {
    id: "bespoke-03",
    title: "Bespoke Collection 03",
    category: "Bespoke",
    image: "/images/Bespoke3.jpg",
  },
  {
    id: "bespoke-04",
    title: "Bespoke Collection 04",
    category: "Bespoke",
    image: "/images/Bespoke4.jpg",
  },
  {
    id: "bespoke-05",
    title: "Bespoke Collection 05",
    category: "Bespoke",
    image: "/images/Bespoke5.jpg",
  },
  {
    id: "bespoke-06",
    title: "Bespoke Collection 06",
    category: "Bespoke",
    image: "/images/Bespoke6.jpg",
  },
];

export const collectionCategories: CollectionCategory[] = [
  "All",
  "Dining",
  "Living",
  "Bedroom",
  "Bespoke",
];