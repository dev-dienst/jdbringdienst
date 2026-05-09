import hofEickhausStall from "@/assets/hof-eickhaus-stall.jpg";
import hofEickhausStall2 from "@/assets/hof-eickhaus-stall-2.jpg";
import fechnerFeld from "@/assets/fechner-feld.jpg";
import fechnerKartoffeln from "@/assets/fechner-kartoffeln.jpg";
import fechnerKartoffelnTueten from "@/assets/fechner-kartoffeln-tueten.jpg";
import erdbeerenSchalen from "@/assets/erdbeeren-schalen.jpg";
import erdbeerenFeld from "@/assets/erdbeeren-feld.jpg";

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
      "Frische Eier vom Hof Eickhaus. Die Hühner werden mit eigener Fütterung versorgt und in einem hofeigenen Stall gehalten – mit geschlossenem und offenem Bereich, sodass die Tiere ausreichend Platz und Sonne haben.",
    image: hofEickhausStall2,
    images: [hofEickhausStall2, hofEickhausStall],
    badge: "Größe M",
    husbandry: "Hofeigener Stall mit geschlossenem und offenem Bereich – eigene Fütterung",
  },
  {
    id: "2",
    name: "Frische Eier – Größe L",
    price: 0.38,
    unit: "Stück",
    category: "eier",
    farmer: "Hof Eickhaus (Moers-Schwafheim)",
    description:
      "Frische Eier vom Hof Eickhaus. Die Hühner werden mit eigener Fütterung versorgt und in einem hofeigenen Stall gehalten – mit geschlossenem und offenem Bereich, sodass die Tiere ausreichend Platz und Sonne haben.",
    image: eierEickhaus,
    images: [eierEickhaus, hofEickhausStall],
    badge: "Größe L",
    husbandry: "Hofeigener Stall mit geschlossenem und offenem Bereich – eigene Fütterung",
  },
  {
    id: "3",
    name: "Kartoffeln – Schwafheimer Hofladen Fechner",
    price: 2.0,
    unit: "kg",
    category: "kartoffeln",
    farmer: "Schwafheimer Hofladen Fechner (Moers-Schwafheim)",
    description:
      "Frische Kartoffeln vom Schwafheimer Hofladen Fechner. Bauer Fechner baut Kartoffeln auf einer Fläche so groß wie rund 250 Fußballfelder an. Erhältlich in den Sorten festkochend, vorwiegend festkochend und mehlig. Richtpreis: ca. 2,00 € pro kg – ab 5 kg ca. 1,60 € pro kg (Angaben unverbindlich).",
    image: fechnerKartoffelnTueten,
    images: [fechnerKartoffelnTueten, fechnerKartoffeln, fechnerFeld],
    badge: "Regional",
    husbandry: "Festkochend, vorwiegend festkochend und mehlig – ab 5 kg ca. 1,60 €/kg",
  },
  {
    id: "4",
    name: "Frische Erdbeeren",
    price: 5.50,
    unit: "500g Schale",
    category: "erdbeeren",
    farmer: "Regionaler Partnerhof",
    description:
      "Sonnengereifte Erdbeeren, frisch vom Feld gepflückt. Süß, aromatisch und voller Geschmack. Richtpreis: ca. 5,50 € pro 500g-Schale (Angabe unverbindlich).",
    image: erdbeerenSchalen,
    images: [erdbeerenSchalen, erdbeerenFeld],
    badge: "Saison",
  },
];
