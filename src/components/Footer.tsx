import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Bauernmarkt
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Frische Produkte von regionalen Bauern – direkt zu Ihnen nach Hause. Qualität, die man schmeckt.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Startseite</Link>
              <Link to="/produkte" className="text-sm text-muted-foreground hover:text-primary transition-colors">Produkte</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Kontakt</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Marktplatz 1, 12345 Grünstadt
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +49 123 456 789
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                info@bauernmarkt.de
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bauernmarkt. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
