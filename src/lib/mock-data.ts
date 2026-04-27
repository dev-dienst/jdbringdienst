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
  { id: "eier", name: "Eier", icon: "🥚", count: 1 },
  { id: "kartoffeln", name: "Kartoffeln", icon: "🥔", count: 1 },
  { id: "erdbeeren", name: "Erdbeeren", icon: "🍓", count: 1 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Freiland-Eier",
    price: 4.20,
    unit: "10 Stk.",
    category: "eier",
    farmer: "Bauernhof Eichwalde",
    description: "Freiland-Eier von glücklichen Hühnern. Unsere Hühner haben viel Auslauf und werden mit regionalem Futter versorgt.",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
    badge: "Frisch",
  },
  {
    id: "2",
    name: "Bio-Kartoffeln",
    price: 2.80,
    unit: "kg",
    category: "kartoffeln",
    farmer: "Hof Sonnenschein",
    description: "Festkochende Bio-Kartoffeln aus regionalem Anbau. Perfekt für Salate, Bratkartoffeln oder Beilagen.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop",
    badge: "Bio",
  },
  {
    id: "3",
    name: "Frische Erdbeeren",
    price: 5.90,
    unit: "500g",
    category: "erdbeeren",
    farmer: "Beerenhof Sommerfeld",
    description: "Sonnengereifte Erdbeeren, frisch vom Feld gepflückt. Süß, aromatisch und voller Geschmack.",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
    badge: "Saison",
  },
];
