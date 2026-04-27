import eierEickhaus from "@/assets/eier-eickhaus.jpg";
import hofEickhausStall from "@/assets/hof-eickhaus-stall.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  farmer: string;
  description: string;
  image: string;
  images?: string[];
  badge?: string;
  husbandry?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: "eier", name: "Eier", icon: "🥚", count: 2 },
  { id: "kartoffeln", name: "Kartoffeln", icon: "🥔", count: 1 },
  { id: "erdbeeren", name: "Erdbeeren", icon: "🍓", count: 1 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Frische Eier – Größe M",
    price: 0.33,
    unit: "Stück",
    category: "eier",
    farmer: "Hof Eickhaus (Moers-Schwafheim)",
    description:
      "Frische Eier aus Bodenhaltung vom Hof Eickhaus. Die Hühner werden mit eigener Fütterung versorgt und in einem hofeigenen Stall gehalten – mit geschlossenem und offenem Bereich, sodass die Tiere ausreichend Platz und Sonne haben.",
    image: eierEickhaus,
    images: [eierEickhaus, hofEickhausStall],
    badge: "Größe M",
    husbandry: "Bodenhaltung mit offenem Außenbereich – eigene Fütterung",
  },
  {
    id: "2",
    name: "Frische Eier – Größe L",
    price: 0.38,
    unit: "Stück",
    category: "eier",
    farmer: "Hof Eickhaus (Moers-Schwafheim)",
    description:
      "Frische Eier aus Bodenhaltung vom Hof Eickhaus. Die Hühner werden mit eigener Fütterung versorgt und in einem hofeigenen Stall gehalten – mit geschlossenem und offenem Bereich, sodass die Tiere ausreichend Platz und Sonne haben.",
    image: eierEickhaus,
    images: [eierEickhaus, hofEickhausStall],
    badge: "Größe L",
    husbandry: "Bodenhaltung mit offenem Außenbereich – eigene Fütterung",
  },
  {
    id: "3",
    name: "Bio-Kartoffeln",
    price: 2.80,
    unit: "kg",
    category: "kartoffeln",
    farmer: "Hof Sonnenschein",
    description:
      "Festkochende Bio-Kartoffeln aus regionalem Anbau. Perfekt für Salate, Bratkartoffeln oder Beilagen.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop",
    badge: "Bio",
  },
  {
    id: "4",
    name: "Frische Erdbeeren",
    price: 5.90,
    unit: "500g",
    category: "erdbeeren",
    farmer: "Beerenhof Sommerfeld",
    description:
      "Sonnengereifte Erdbeeren, frisch vom Feld gepflückt. Süß, aromatisch und voller Geschmack.",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
    badge: "Saison",
  },
];
