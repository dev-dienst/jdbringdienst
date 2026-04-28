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
                JD Bringdienst
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Informationen über mein Angebot: frische Produkte von regionalen Höfen,
              persönlich ausgeliefert.
            </p>
            <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Bestellungen ausschließlich telefonisch.</p>
              <p className="mt-1">
                Diese Website ist eine reine Informationsseite. Es findet kein Online-Verkauf
                statt. Preisangaben sind unverbindlich und dienen nur der Information; sie
                können sich wöchentlich ändern.
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Startseite</Link>
              <Link to="/produkte" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sortiment</Link>
              <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Impressum</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div>
                <span className="font-medium text-foreground">Angaben gemäß § 5 DDG (TMG):</span>
                <br />
                Dennis Marcinkowski
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Prinz-Regent-Straße 27a, 47167 Duisburg</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+4901748911036" className="hover:text-primary transition-colors">
                  0174 8911036
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:jdbringdienst@mail.de"
                  className="hover:text-primary transition-colors"
                >
                  jdbringdienst@mail.de
                </a>
              </div>
              <div>
                <span className="font-medium text-foreground">Steuernummer:</span> 107/5096/7295
              </div>
              <div className="leading-relaxed">
                <span className="font-medium text-foreground">Hinweis gemäß § 19 UStG:</span>
                <br />
                Es wird keine Umsatzsteuer berechnet.
              </div>
              <div className="leading-relaxed">
                <span className="font-medium text-foreground">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
                </span>
                <br />
                Dennis Marcinkowski (Anschrift wie oben)
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} JD Bringdienst – Dennis Marcinkowski. Alle Angaben ohne Gewähr.
        </div>
      </div>
    </footer>
  );
}
