import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/mock-data";
import { ArrowRight, Truck, Leaf, Heart, ChevronDown, ChevronUp } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import hofEickhausStall2 from "@/assets/hof-eickhaus-stall-2.jpg";

const featuredProducts = products.slice(0, 4);

const Index = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Frischer Bauernmarkt" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/30" />
          </div>
          <div className="container relative py-24 md:py-36">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Frisch vom Feld aus der Region von ausgewählten Bauern mit der besten Qualität
              </h1>
              <p className="mt-4 text-lg font-medium text-primary-foreground/90" style={{ fontFamily: "'Lora', serif" }}>
                Frische Lebensmittel direkt vom Bauernhof – geliefert zu dir nach Hause.
              </p>
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowMore((v) => !v)}
                  className="rounded-full bg-background/10 text-primary-foreground border-primary-foreground/40 hover:bg-background/20 hover:text-primary-foreground backdrop-blur"
                >
                  {showMore ? (
                    <>Weniger anzeigen <ChevronUp className="ml-2 h-4 w-4" /></>
                  ) : (
                    <>Mehr erfahren <ChevronDown className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </div>
              {showMore && (
                <div className="mt-6 space-y-4 text-base text-primary-foreground/80 animate-in fade-in slide-in-from-top-2 duration-300" style={{ fontFamily: "'Lora', serif" }}>
                  <p>
                    Ich fahre regelmäßig zu ausgewählten Höfen in der Region und bringe dir Eier,
                    Kartoffeln und Erdbeeren direkt vorbei. Ohne Zwischenhandel, ohne lange Lagerung.
                  </p>
                  <div>
                    <p className="font-semibold text-primary-foreground">Meine Partner:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Schwafheimer Hofladen Fechner (Moers-Schwafheim) – verschiedene Kartoffelsorten</li>
                      <li>Hof Eickhaus (Moers-Schwafheim) – Eier</li>
                      <li>Wickrather Bauernladen Klanten (Kamp-Lintfort) – Erdbeeren</li>
                      <li>Schmücker Hof (Bottrop) – Erdbeeren</li>
                    </ul>
                  </div>
                  <p>Die Lieferung erfolgt in der Regel einmal pro Woche.</p>
                  <p>
                    Du entscheidest jedes Mal selbst, ob und was du bestellen möchtest.
                    Keine Verpflichtung, kein Abo.
                  </p>
                  <div>
                    <p className="font-semibold text-primary-foreground">Geeignet für:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Menschen mit wenig Zeit,</li>
                      <li>Personen die keine Möglichkeit haben, selbst zu den Höfen zu kommen</li>
                      <li>und für alle die Wert auf regionale und frische Produkte legen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">Vorteile:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>beste Qualität</li>
                      <li>direkte Unterstützung der Landwirte</li>
                      <li>faire Preise</li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="mt-8 flex gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/produkte">
                    Jetzt entdecken <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b bg-card py-10">
          <div className="container flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { icon: Leaf, text: "100% Regional" },
              { icon: Truck, text: "Schnelle Lieferung" },
              { icon: Heart, text: "Mit Liebe erzeugt" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-primary" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">Unsere Kategorien</h2>
            <p className="mx-auto mt-2 max-w-md text-center text-muted-foreground">
              Von frischem Obst bis zu handgemachtem Brot – entdecke unser vielfältiges Sortiment.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((cat) => (
                <Link key={cat.id} to={`/produkte?kategorie=${cat.id}`}>
                  <Card className="group cursor-pointer border-border/50 transition-all hover:border-primary/30 hover:shadow-md">
                    <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                      <span className="text-4xl">{cat.icon}</span>
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-xs text-muted-foreground">{cat.count} Produkte</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-card py-16">
          <div className="container">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Ausgewählte Produkte</h2>
                <p className="mt-2 text-muted-foreground">Unsere Empfehlungen für dich</p>
              </div>
              <Button variant="ghost" asChild className="hidden sm:flex">
                <Link to="/produkte">
                  Alle ansehen <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild>
                <Link to="/produkte">Alle Produkte ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold">Über unseren Bauernmarkt</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>
                Wir verbinden lokale Bauern und Erzeuger direkt mit dir. Keine langen Transportwege,
                keine Zwischenhändler – nur frische, ehrliche Produkte aus der Region.
                Jeder Einkauf unterstützt die Landwirte in deiner Nähe und fördert eine nachhaltige Landwirtschaft.
              </p>
              <Button variant="outline" className="mt-6 rounded-full">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
