
import Link from 'next/link';

export function Header() {
  return (
    <header className="header">
      <Link className="brand" href="/">
        INDUSTRIAL<span> / SOLUTIONS</span>
      </Link>

      <nav>
        <Link href="/aog2026">AOG 2026</Link>
        <Link href="/crucetas">Crucetas</Link>
        <Link href="/premoldeados">Premoldeados</Link>
        <Link href="/soluciones">Soluciones</Link>
        <Link href="/como-trabajamos">Metodología</Link>
        <Link className="navcta" href="/contacto">
          Contacto ↗
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>Soluciones industriales · Argentina</span>
      <span>
        Información técnica sujeta a verificación y evaluación de aplicación.
      </span>
    </footer>
  );
}

export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={secondary ? 'btn secondary' : 'btn'} href={href}>
      {children} ↗
    </Link>
  );
}

export function SectionHead({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
