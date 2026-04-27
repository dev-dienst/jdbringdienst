import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/mock-data";
import { ShoppingCart, ArrowLeft, MapPin } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Produkt nicht gefunden</h1>
            <Button asChild variant="outline" className="mt-4">
              <Link to="/produkte">Zurück zu den Produkten</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container py-8">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link to="/produkte">
              <ArrowLeft className="mr-2 h-4 w-4" /> Zurück
            </Link>
          </Button>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Images */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-2 gap-3">
                  {product.images.slice(1).map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-xl">
                      <img
                        src={img}
                        alt={`${product.name} – Eindruck vom Hof`}
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              {product.badge && (
                <Badge className="mb-3 w-fit bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              )}
              <h1 className="text-3xl font-bold md:text-4xl">{product.name}</h1>

              <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{product.farmer}</span>
              </div>

              <p className="mt-6 leading-relaxed text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>
                {product.description}
              </p>

              {product.husbandry && (
                <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-primary">Haltung</p>
                  <p className="mt-1 text-sm text-muted-foreground">{product.husbandry}</p>
                </div>
              )}

              <div className="mt-8">
                <span className="text-3xl font-bold text-primary">
                  {product.price.toFixed(2).replace(".", ",")} €
                </span>
                <span className="text-muted-foreground"> / {product.unit}</span>
              </div>

              <Button size="lg" className="mt-6 w-full rounded-full sm:w-auto">
                <ShoppingCart className="mr-2 h-5 w-5" /> In den Warenkorb
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
