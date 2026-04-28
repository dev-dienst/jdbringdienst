import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container max-w-3xl py-12">
          <h1 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Datenschutzerklärung
          </h1>

          <section className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
              Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              Dennis Marcinkowski<br />
              Prinz-Regent-Straße 27a<br />
              47167 Duisburg<br />
              Telefon: 0174 8911036<br />
              E-Mail: jdbringdienst@mail.de
            </p>
          </section>

          <section className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Diese Website dient ausschließlich der Information über das Angebot von
              JD Bringdienst. Es werden keine Bestellungen über die Website entgegengenommen,
              es gibt keinen Online-Shop, keine Kundenkonten, kein Kontaktformular und keine
              Newsletter-Anmeldung. Eine darüber hinausgehende Erhebung personenbezogener Daten
              durch den Betreiber findet nicht statt.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground">3. Server-Logfiles</h2>
            <p>
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch
              technische Informationen erfasst, die der Browser übermittelt (z. B. Browsertyp,
              Betriebssystem, Referrer-URL, Datum und Uhrzeit des Zugriffs, IP-Adresse).
              Diese Daten sind technisch erforderlich, um die Website auszuliefern und ihre
              Stabilität und Sicherheit zu gewährleisten (Rechtsgrundlage: Art. 6 Abs. 1 lit. f
              DSGVO – berechtigtes Interesse). Eine Zusammenführung dieser Daten mit anderen
              Datenquellen erfolgt nicht.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground">4. Cookies und Tracking</h2>
            <p>
              Diese Website verwendet keine eigenen Tracking- oder Marketing-Cookies und keine
              Analysedienste wie Google Analytics. Es findet kein Profiling statt.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground">5. Telefonische Kontaktaufnahme</h2>
            <p>
              Wenn Sie telefonisch Kontakt aufnehmen, werden die von Ihnen mitgeteilten Daten
              (z. B. Name, Telefonnummer, Lieferadresse, Bestellung) ausschließlich zur
              Bearbeitung Ihrer Anfrage und zur Durchführung der Lieferung verarbeitet
              (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald
              sie für den Zweck ihrer Erhebung nicht mehr erforderlich sind und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground">6. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
              (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung
              (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie auf Widerspruch
              (Art. 21 DSGVO). Es besteht zudem ein Beschwerderecht bei der zuständigen
              Datenschutzaufsichtsbehörde (Art. 77 DSGVO). Zuständig ist in Nordrhein-Westfalen
              die Landesbeauftragte für Datenschutz und Informationsfreiheit NRW.
            </p>
          </section>

          <section className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <h2 className="text-xl font-semibold text-foreground">7. Aktualität</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung der
              Website oder geänderte gesetzliche Vorgaben kann es notwendig werden, sie
              anzupassen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
