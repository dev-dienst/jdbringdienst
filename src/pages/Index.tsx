import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { OrderNotice } from "@/components/OrderNotice";
import { categories, products } from "@/lib/mock-data";
import { ArrowRight, Truck, Leaf, Heart, ChevronDown, ChevronUp } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import hofEickhausStall2 from "@/assets/hof-eickhaus-stall-2.jpg";
import fechnerFeld from "@/assets/fechner-feld.jpg";
import fechnerKartoffeln from "@/assets/fechner-kartoffeln.jpg";
import klantenErdbeerfeld from "@/assets/klanten-erdbeerfeld.jpg";
import klantenTunnel from "@/assets/klanten-tunnel.jpg";

const featuredProducts = products.slice(0, 4);

const Index = () => {
  const [showMore, setShowMore] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="JD Bringdienst – Frische vom Bauernhof" className="h-full w-full object-cover" />
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
                    Sortiment ansehen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Bestellhinweis */}
        <section className="border-b bg-card py-8">
          <div className="container max-w-3xl">
            <OrderNotice />
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
              Frische Eier, Kartoffeln und Erdbeeren – direkt von ausgewählten Höfen aus der Region.
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

        {/* Hof Eickhaus */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <img
                    src={hofEickhausStall2}
                    alt="Stall vom Hof Eickhaus mit offenem und geschlossenem Bereich"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <span className="text-sm font-medium uppercase tracking-wide text-primary">
                    Unser Partner
                  </span>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Hof Eickhaus – Frische Eier
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>
                    Die Hühner vom Hof Eickhaus werden mit eigener Fütterung versorgt
                    und im hofeigenen Stall gehalten. Der Stall verfügt über einen
                    geschlossenen sowie einen offenen Bereich, sodass die Hühner
                    ausreichend Platz und Sonne haben.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                      <p className="text-sm text-muted-foreground">Eier Größe M</p>
                      <p className="mt-1 text-2xl font-bold text-primary">ca. 0,33 €</p>
                      <p className="text-xs text-muted-foreground">pro Stück</p>
                    </div>
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                      <p className="text-sm text-muted-foreground">Eier Größe L</p>
                      <p className="mt-1 text-2xl font-bold text-primary">ca. 0,38 €</p>
                      <p className="text-xs text-muted-foreground">pro Stück</p>
                    </div>
                  </div>

                  <OrderNotice variant="inline" className="mt-4" />

                  <Button asChild className="mt-6 w-fit rounded-full">
                    <Link to="/produkte?kategorie=eier">
                      Eier ansehen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schwafheimer Hofladen Fechner */}
        <section className="pb-16">
          <div className="container">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="order-2 flex flex-col justify-center p-6 md:order-1 md:p-10">
                  <span className="text-sm font-medium uppercase tracking-wide text-primary">
                    Unser Partner
                  </span>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Schwafheimer Hofladen Fechner – Kartoffeln
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>
                    Bauer Fechner aus Moers-Schwafheim baut Kartoffeln auf einer
                    beeindruckenden Fläche so groß wie rund 250 Fußballfelder an.
                    Erhältlich in den Sorten <strong>festkochend</strong>,{" "}
                    <strong>vorwiegend festkochend</strong> und <strong>mehlig</strong> –
                    frisch geerntet und direkt aus der Region.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                      <p className="text-sm text-muted-foreground">Kartoffeln</p>
                      <p className="mt-1 text-2xl font-bold text-primary">ca. 2,00 €</p>
                      <p className="text-xs text-muted-foreground">pro kg</p>
                    </div>
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                      <p className="text-sm text-muted-foreground">Ab 5 kg</p>
                      <p className="mt-1 text-2xl font-bold text-primary">ca. 1,60 €</p>
                      <p className="text-xs text-muted-foreground">pro kg</p>
                    </div>
                  </div>

                  <OrderNotice variant="inline" className="mt-4" />

                  <Button asChild className="mt-6 w-fit rounded-full">
                    <Link to="/produkte?kategorie=kartoffeln">
                      Kartoffeln ansehen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="order-1 grid grid-cols-2 gap-1 md:order-2 md:grid-cols-1">
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <img
                      src={fechnerKartoffeln}
                      alt="Frisch geerntete Kartoffeln vom Hof Fechner"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <img
                      src={fechnerFeld}
                      alt="Kartoffelfeld vom Schwafheimer Hofladen Fechner"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wickrather Bauernladen Klanten */}
        <section className="pb-16">
          <div className="container">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="grid grid-cols-2 gap-1 md:grid-cols-1">
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <img
                      src={klantenErdbeerfeld}
                      alt="Erdbeerfeld mit Folientunneln vom Wickrather Bauernladen Klanten"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <img
                      src={klantenTunnel}
                      alt="Blick in einen Erdbeer-Folientunnel vom Wickrather Bauernladen Klanten"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <span className="text-sm font-medium uppercase tracking-wide text-primary">
                    Unser Partner
                  </span>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Wickrather Bauernladen Klanten – Freilanderdbeeren
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>
                    Der Wickrather Bauernladen Klanten in Kamp-Lintfort baut seine Erdbeeren auf
                    weitläufigen Feldern direkt in der Region an. Die Pflanzen wachsen im Freiland
                    und werden teilweise durch Folientunnel geschützt – so reifen die Früchte
                    wettergeschützt und sonnenverwöhnt aus.
                  </p>
                  <p className="mt-3 leading-relaxed text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>
                    Geerntet wird von Hand, wenn die Erdbeeren wirklich reif sind. Das Ergebnis:
                    aromatische, saftige Früchte mit dem typischen, vollen Erdbeergeschmack –
                    frisch vom Feld in deine Schale.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3">
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                      <p className="text-sm text-muted-foreground">Erdbeeren</p>
                      <p className="mt-1 text-2xl font-bold text-primary">ca. 5,50 €</p>
                      <p className="text-xs text-muted-foreground">pro 500 g Schale</p>
                    </div>
                  </div>

                  <OrderNotice variant="inline" className="mt-4" />

                  <Button asChild className="mt-6 w-fit rounded-full">
                    <Link to="/produkte?kategorie=erdbeeren">
                      Erdbeeren ansehen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold">Über JD Bringdienst</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>
                Ich verbinde lokale Bauern und Erzeuger direkt mit dir. Keine langen Transportwege,
                keine Zwischenhändler – nur frische, ehrliche Produkte aus der Region.
                Wer hier mitmacht, unterstützt die Landwirte in der Nähe und eine nachhaltige Landwirtschaft.
              </p>
              <Button
                variant="outline"
                className="mt-6 rounded-full"
                onClick={() => setShowAbout((v) => !v)}
                aria-expanded={showAbout}
              >
                {showAbout ? (
                  <>Weniger anzeigen <ChevronUp className="ml-2 h-4 w-4" /></>
                ) : (
                  <>Mehr erfahren <ChevronDown className="ml-2 h-4 w-4" /></>
                )}
              </Button>

              {showAbout && (
                <div
                  className="mx-auto mt-8 max-w-2xl space-y-6 text-left text-muted-foreground animate-in fade-in slide-in-from-top-2 duration-300"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                    JD Bringdienst
                  </h3>
                  <p className="leading-relaxed">
                    JD Bringdienst verbindet regionale Bauernhöfe direkt mit den Menschen in der
                    Umgebung. Ich fahre selbst zu ausgewählten Höfen, nehme dort frische, saisonale
                    Produkte mit und bringe sie gesammelt einmal pro Woche direkt zu den Kunden nach Hause.
                  </p>
                  <p className="leading-relaxed">
                    Der Fokus liegt auf ehrlicher, regionaler Versorgung ohne Umwege über Lager oder
                    große Handelsketten. Die Produkte kommen dort an, wo sie gebraucht werden – frisch,
                    direkt und nachvollziehbar.
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Ablauf
                    </h4>
                    <p className="mt-2 leading-relaxed">
                      Ich fahre im Laufe der Woche zu den regionalen Bauernhöfen und sammle dort die
                      verfügbaren Produkte ein. Kunden geben ihre Bestellung im Voraus auf, sodass
                      ich gezielt einkaufen und planen kann.
                    </p>
                    <p className="mt-2 leading-relaxed">
                      Einmal pro Woche, immer samstags, erfolgt die gebündelte Auslieferung direkt an
                      die Kunden. Die Lieferung ist fest eingeplant, sodass eine klare Struktur
                      entsteht, ohne dass der Kunde sich ständig darum kümmern muss.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Für wen das gedacht ist
                    </h4>
                    <p className="mt-2 leading-relaxed">
                      Der Service richtet sich an Menschen, die Wert auf regionale Lebensmittel legen
                      und ihre Versorgung bewusst einfacher gestalten möchten.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Was JD Bringdienst ausmacht
                    </h4>
                    <p className="mt-2 leading-relaxed">
                      JD Bringdienst steht für direkte Wege zwischen Erzeuger und Kunde. Keine
                      Zwischenlagerung, keine unnötigen Transportketten, sondern ein klarer Ablauf
                      vom Hof bis zur Haustür.
                    </p>
                    <p className="mt-2 leading-relaxed">
                      Die Arbeit ist persönlich organisiert, direkt und transparent. Der Kunde weiß,
                      wo die Produkte herkommen und wann sie ankommen.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
