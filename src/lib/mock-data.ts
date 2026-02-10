export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  farmer: string;
  description: string;
  image: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: "obst", name: "Obst", icon: "🍎", count: 12 },
  { id: "gemuese", name: "Gemüse", icon: "🥕", count: 18 },
  { id: "milch", name: "Milchprodukte", icon: "🧀", count: 8 },
  { id: "fleisch", name: "Fleisch & Wurst", icon: "🥩", count: 6 },
  { id: "honig", name: "Honig & Marmelade", icon: "🍯", count: 5 },
  { id: "brot", name: "Brot & Backwaren", icon: "🍞", count: 7 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Bio-Äpfel (Elstar)",
    price: 3.49,
    unit: "kg",
    category: "obst",
    farmer: "Hof Sonnenschein",
    description: "Knackige Elstar-Äpfel aus biologischem Anbau. Perfekt zum Snacken oder Backen. Geerntet auf den sonnigen Hängen unseres Familienbetriebs.",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
    badge: "Bio",
  },
  {
    id: "2",
    name: "Frische Karotten",
    price: 2.29,
    unit: "Bund",
    category: "gemuese",
    farmer: "Gemüsehof Grüntal",
    description: "Frisch geerntete Karotten mit Grün. Süß und knackig, direkt vom Feld auf den Tisch.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Bergkäse (gereift)",
    price: 8.90,
    unit: "250g",
    category: "milch",
    farmer: "Almhof Berger",
    description: "12 Monate gereifter Bergkäse aus Heumilch. Würzig-nussig im Geschmack, perfekt zur Brotzeit.",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
    badge: "Bestseller",
  },
  {
    id: "4",
    name: "Blütenhonig",
    price: 7.50,
    unit: "500g",
    category: "honig",
    farmer: "Imkerei Waldblüte",
    description: "Cremig gerührter Blütenhonig von unseren fleißigen Bienen. Vielfältige Blütentracht aus Wiesen und Wäldern.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
    badge: "Neu",
  },
  {
    id: "5",
    name: "Freiland-Eier",
    price: 4.20,
    unit: "10 Stk.",
    category: "milch",
    farmer: "Bauernhof Eichwalde",
    description: "Freiland-Eier von glücklichen Hühnern. Unsere Hühner haben viel Auslauf und werden mit regionalem Futter versorgt.",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Sauerteigbrot",
    price: 5.90,
    unit: "Laib",
    category: "brot",
    farmer: "Backstube Müller",
    description: "Handgemachtes Sauerteigbrot mit Dinkelmehl aus der Region. 24 Stunden Teigruhe für besten Geschmack.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    badge: "Handgemacht",
  },
  {
    id: "7",
    name: "Bio-Tomaten",
    price: 4.50,
    unit: "kg",
    category: "gemuese",
    farmer: "Gemüsehof Grüntal",
    description: "Sonnegereifte Bio-Tomaten, aromatisch und saftig. Verschiedene alte Sorten aus unserem Gewächshaus.",
    image: "https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=400&h=400&fit=crop",
    badge: "Bio",
  },
  {
    id: "8",
    name: "Rindfleisch (Rouladen)",
    price: 16.90,
    unit: "kg",
    category: "fleisch",
    farmer: "Weidehof Tannberg",
    description: "Zartes Rindfleisch von Weiderindern. Artgerechte Haltung auf unseren Wiesen im Allgäu.",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400&h=400&fit=crop",
  },
];
