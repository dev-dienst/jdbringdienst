import { Phone, Info } from "lucide-react";

type Variant = "bar" | "card" | "inline";

interface OrderNoticeProps {
  variant?: Variant;
  className?: string;
}

/**
 * Hinweis: Bestellungen sind ausschließlich telefonisch möglich.
 */
export function OrderNotice({ variant = "card", className = "" }: OrderNoticeProps) {
  if (variant === "bar") {
    return (
      <div className={`w-full bg-primary text-primary-foreground ${className}`}>
        <div className="container flex items-center justify-center py-2 text-center text-xs sm:text-sm">
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Bestellungen ausschließlich telefonisch – keine Online-Bestellung möglich.
          </span>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <p className={`flex items-start gap-2 text-sm text-muted-foreground ${className}`}>
        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <span>
          Bestellungen sind ausschließlich <strong>telefonisch</strong> möglich.
          Eine Online-Bestellung wird nicht angeboten.
        </span>
      </p>
    );
  }

  return (
    <div
      className={`rounded-lg border border-primary/30 bg-primary/5 p-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <div className="text-sm">
          <p className="font-semibold text-foreground">
            Bestellungen ausschließlich telefonisch
          </p>
          <p className="mt-1 leading-relaxed text-muted-foreground">
            Diese Seite ist eine reine Informationsseite – es findet kein
            Online-Verkauf statt. Eine Bestellung über das Internet wird nicht
            angeboten. Alle <strong>Preisangaben sind unverbindlich</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
