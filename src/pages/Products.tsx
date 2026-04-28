import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { OrderNotice } from "@/components/OrderNotice";
import { categories, products } from "@/lib/mock-data";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("kategorie") || "alle";

  const filtered = activeCategory === "alle"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="bg-card py-10">
          <div className="container">
            <h1 className="text-3xl font-bold">Unser Sortiment</h1>
            <p className="mt-2 text-muted-foreground">
              Übersicht über die Produkte, die ich aktuell von meinen Partnerhöfen mitbringe.
              Diese Seite dient ausschließlich der Information – Bestellungen sind nur telefonisch möglich.
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <OrderNotice className="mb-8" />
            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-2">
              <Button
                variant={activeCategory === "alle" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setSearchParams({})}
              >
                Alle
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => setSearchParams({ kategorie: cat.id })}
                >
                  {cat.icon} {cat.name}
                </Button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="py-12 text-center text-muted-foreground">
                Keine Produkte in dieser Kategorie gefunden.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
