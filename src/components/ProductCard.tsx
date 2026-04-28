import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import type { Product } from "@/lib/mock-data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 transition-all hover:shadow-lg">
      <Link to={`/produkte/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.badge && (
            <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
              {product.badge}
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground">{product.farmer}</p>
        <Link to={`/produkte/${product.id}`}>
          <h3 className="mt-1 font-semibold leading-tight hover:text-primary transition-colors" style={{ fontFamily: "'Lora', serif" }}>
            {product.name}
          </h3>
        </Link>
        <div className="mt-3 flex items-end justify-between gap-2">
          <div>
            <span className="text-lg font-bold text-primary">
              ca. {product.price.toFixed(2).replace(".", ",")} €
            </span>
            <span className="text-sm text-muted-foreground"> / {product.unit}</span>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            <Phone className="h-3 w-3" /> Nur telefonisch
          </span>
        </div>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Preisangabe unverbindlich, wöchentliche Aktualisierung – Angaben ohne Gewähr.
        </p>
      </CardContent>
    </Card>
  );
}
