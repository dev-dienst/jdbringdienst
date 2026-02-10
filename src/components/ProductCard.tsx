import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
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
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">
              {product.price.toFixed(2).replace(".", ",")} €
            </span>
            <span className="text-sm text-muted-foreground"> / {product.unit}</span>
          </div>
          <Button size="icon" variant="outline" className="h-9 w-9 rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
