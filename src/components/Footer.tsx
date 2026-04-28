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
            <h4 className="mb-4 font-semibold">Impressum</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Prinz-Regent-Straße 27a, 47167 Duisburg</span>
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
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} JD Bringdienst. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
