import eierEickhaus from "@/assets/eier-eickhaus.jpg";
import hofEickhausStall from "@/assets/hof-eickhaus-stall.jpg";
import fechnerFeld from "@/assets/fechner-feld.jpg";
import fechnerKartoffeln from "@/assets/fechner-kartoffeln.jpg";
import fechnerKartoffelnTueten from "@/assets/fechner-kartoffeln-tueten.jpg";

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
    name: "Kartoffeln – Schwafheimer Hofladen Fechner",
    price: 2.0,
    unit: "kg",
    category: "kartoffeln",
    farmer: "Schwafheimer Hofladen Fechner (Moers-Schwafheim)",
    description:
      "Frische Kartoffeln vom Schwafheimer Hofladen Fechner. Bauer Fechner baut Kartoffeln auf einer Fläche so groß wie rund 250 Fußballfelder an. Erhältlich in den Sorten festkochend, vorwiegend festkochend und mehlig. Preis: 2,00 € pro kg – ab 5 kg nur 1,60 € pro kg.",
    image: fechnerKartoffelnTueten,
    images: [fechnerKartoffelnTueten, fechnerKartoffeln, fechnerFeld],
    badge: "Regional",
    husbandry: "Festkochend, vorwiegend festkochend und mehlig – ab 5 kg 1,60 €/kg",
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
