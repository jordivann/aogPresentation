
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premoldeados de hormigón | Columnas y bases',
  description:
    'Columnas huecas cuadradas y redondas y bases para contenedores. Modelos, dimensiones y características técnicas de Gallará.',
};

type Producto = {
  codigo: string;
  dimensiones: string;
  peso: string;
  imagen: string;
};

const cuadradas: Producto[] = [
  {
    codigo: 'CCHE-200',
    dimensiones: '50 × 20 × 20 cm',
    peso: '19 kg',
    imagen: 'cuadradas-producto-1-1.webp',
  },
  {
    codigo: 'CCHE-250',
    dimensiones: '50 × 25 × 25 cm',
    peso: '23,9 kg',
    imagen: 'cuadradas-producto-1-2.webp',
  },
  {
    codigo: 'CCHE-300',
    dimensiones: '50 × 30 × 30 cm',
    peso: '28,1 kg',
    imagen: 'cuadradas-producto-2-1.webp',
  },
  {
    codigo: 'CCHE-501',
    dimensiones: '50 × 50 × 50 cm',
    peso: '54,3 kg',
    imagen: 'cuadradas-producto-2-2.webp',
  },
];

const redondas: Producto[] = [
  {
    codigo: 'CRHE-200',
    dimensiones: '50 × Ø 20 cm',
    peso: '14 kg',
    imagen: 'redondas-producto-1-1.webp',
  },
  {
    codigo: 'CRHE-250',
    dimensiones: '50 × Ø 25 cm',
    peso: '17,5 kg',
    imagen: 'redondas-producto-1-2.webp',
  },
  {
    codigo: 'CRHE-300',
    dimensiones: '50 × Ø 30 cm',
    peso: '23 kg',
    imagen: 'redondas-producto-1-3.webp',
  },
  {
    codigo: 'CRHE-201',
    dimensiones: '50 × Ø 20 cm',
    peso: '15,2 kg',
    imagen: 'redondas-producto-2-1.webp',
  },
  {
    codigo: 'CRHE-251',
    dimensiones: '50 × Ø 25 cm',
    peso: '19,8 kg',
    imagen: 'redondas-producto-2-2.webp',
  },
  {
    codigo: 'CRHE-301',
    dimensiones: '50 × Ø 30 cm',
    peso: '24,6 kg',
    imagen: 'redondas-producto-2-3.webp',
  },
];

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns:
    'repeat(auto-fit, minmax(min(100%, 255px), 1fr))',
  gap: 20,
  marginTop: 26,
};

const panel: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #dce4e4',
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 6px 20px rgba(18,26,29,.035)',
};

function Catalogo({
  productos,
}: {
  productos: Producto[];
}) {
  return (
    <div className="prem-products-grid" style={grid}>
      {productos.map((p) => (
        <article
          className="prem-product-card"
          key={p.codigo}
          style={{
            ...panel,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            className="prem-product-media"
            style={{
              height: 245,
              background: '#f1f4f4',
              padding: 22,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <Image
              src={`/premoldeados/${p.imagen}`}
              alt={`Pieza premoldeada Gallará ${p.codigo}`}
              width={350}
              height={350}
              sizes="(max-width: 700px) 95vw, 30vw"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>

          <div
            style={{
              padding: '20px 22px 22px',
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              gap: 12,
            }}
          >
            <div>
              <span
                style={{
                  color: '#157345',
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: '.09em',
                }}
              >
                MODELO
              </span>

              <h3
                style={{
                  fontSize: 23,
                  margin: '4px 0 0',
                  lineHeight: 1.2,
                }}
              >
                {p.codigo}
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gap: 8,
                fontSize: 15,
              }}
            >
              <div>
                <span style={{ color: '#617078' }}>
                  DIMENSIONES
                </span>
                <div style={{ fontWeight: 750 }}>
                  {p.dimensiones}
                </div>
              </div>

              <div>
                <span style={{ color: '#617078' }}>
                  PESO
                </span>
                <div style={{ fontWeight: 750 }}>
                  {p.peso}
                </div>
              </div>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: '#536166',
                lineHeight: 1.5,
              }}
            >
              Elemento hueco utilizado como encofrado.
              No incluye armadura.
            </p>

            <details className="prem-details"
              style={{
                marginTop: 'auto',
                borderTop: '1px solid #e2e8e8',
                paddingTop: 13,
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  color: '#126b3d',
                  fontWeight: 750,
                }}
              >
                Ver información técnica
              </summary>

              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: '#536166',
                  marginTop: 12,
                }}
              >
                <p>
                  <strong>Modelo:</strong> {p.codigo}
                </p>
                <p>
                  <strong>Altura nominal:</strong> 50 cm
                </p>
                <p>
                  <strong>Dimensiones exteriores:</strong>{' '}
                  {p.dimensiones}
                </p>
                <p>
                  <strong>Peso informado:</strong> {p.peso}
                </p>
                <p>
                  Pieza hueca para encofrado, sin armadura
                  incluida. La geometría interior debe
                  confirmarse con el fabricante.
                </p>
                <p>
                  <strong>Precio y disponibilidad:</strong>{' '}
                  a consultar.
                </p>
              </div>
            </details>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function PremoldeadosPage() {
  return (
    <main className="prem-page">
      {/* PORTADA */}
      <section className="prem-hero">
        <Image
          src="/premoldeados/portada.webp"
          alt="Elementos premoldeados de hormigón para infraestructura"
          fill
          priority
          sizes="100vw"
          className="prem-hero-image"
        />

        <div className="prem-hero-overlay" />

        <div className="prem-hero-content">
          <span className="prem-kicker">
            INFRAESTRUCTURA / HORMIGÓN PREMOLDEADO
          </span>

          <h1>
            Soluciones en hormigón
            <br />
            <span>para proyectos reales.</span>
          </h1>

          <p>
            Columnas premoldeadas y bases para contenedores.
            Explorá modelos, dimensiones y aplicaciones
            para obras e infraestructura industrial.
          </p>

          <div className="prem-hero-actions">
            <a href="#cuadradas" className="btn">
              Explorar columnas ↓
            </a>

            <Link href="/contacto" className="btn secondary">
              Consultar una solución ↗
            </Link>
          </div>

          <div className="prem-hero-bottom">
            <span>01 / COLUMNAS CUADRADAS</span>
            <span>02 / COLUMNAS REDONDAS</span>
            <span>03 / BASES PARA CONTENEDORES</span>
          </div>
        </div>
      </section>

      {/* COLUMNAS CUADRADAS */}
      <section id="cuadradas" className="section prem-section">
        <span className="eyebrow">
          01 / SISTEMAS CONSTRUCTIVOS
        </span>

        <h2>Columnas cuadradas</h2>

        <p>
          Cuatro módulos huecos de 50 cm de altura,
          con secciones exteriores desde 20 × 20
          hasta 50 × 50 cm.
        </p>

        <Catalogo productos={cuadradas} />
      </section>

      {/* COLUMNAS REDONDAS */}
      <section id="redondas" className="section muted prem-section">
        <span className="eyebrow">
          02 / SISTEMAS CONSTRUCTIVOS
        </span>

        <h2>Columnas redondas</h2>

        <p>
          Seis modelos de 50 cm de altura y diámetros
          exteriores de 20, 25 y 30 cm.
          Las variantes geométricas deben verificarse
          antes de especificar el producto.
        </p>

        <Catalogo productos={redondas} />
      </section>

      {/* BASES PARA CONTENEDORES */}
      <section id="bases" className="section prem-section">
        <span className="eyebrow">
          03 / INFRAESTRUCTURA MODULAR
        </span>

        <h2>Bases para contenedores</h2>

        <div className="prem-base-grid"
          style={{
            ...grid,
            alignItems: 'center',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(min(100%,310px),1fr))',
          }}
        >
          <div
            style={{
              ...panel,
              background: '#f1f4f4',
              padding: 22,
            }}
          >
            <Image
              src="/premoldeados/bases-producto-1-1.webp"
              alt="Base premoldeada Gallará BSHZ-090"
              width={650}
              height={420}
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: 27,
                marginBottom: 18,
              }}
            >
              BSHZ-090
            </h3>

            <p>
              <strong>Dimensiones:</strong> 94 × 94 × 30 cm
            </p>
            <p>
              <strong>Peso:</strong> 602 kg
            </p>
            <p>
              <strong>Material:</strong> hormigón
            </p>
            <p>
              <strong>Precio:</strong> solicitar cotización
            </p>

            <p>
              El plano indica geometría e insertos.
              La capacidad portante, el terreno,
              las fundaciones y los anclajes deben
              verificarse para cada proyecto.
            </p>

            <details className="prem-details"
              style={{
                marginTop: 20,
                padding: 16,
                border: '1px solid #dce4e4',
                borderRadius: 10,
                background: '#f1f4f4',
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  fontWeight: 750,
                  color: '#126b3d',
                }}
              >
                Ver detalles técnicos y de instalación
              </summary>

              <p>
                Base estándar de hormigón BSHZ-090,
                dimensiones exteriores 94 × 94 × 30 cm
                y peso informado de 602 kg.
              </p>

              <p>
                La disposición, nivelación, anclajes
                y capacidad portante deben verificarse
                para el contenedor y el terreno de cada obra.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section muted prem-section">
        <span className="eyebrow">
          CONSULTA TÉCNICA
        </span>

        <h2>Evaluemos la aplicación</h2>

        <p>
          Las columnas huecas requieren proyecto y
          verificación de armadura, relleno, cargas
          y fundaciones. Precios, logística y disponibilidad
          se confirman mediante cotización.
        </p>

        <div className="actions">
          <Link href="/contacto" className="btn">
            Consultar una solución ↗
          </Link>
        </div>
      </section>

      <style>{`
        .prem-page {
          overflow: hidden;
        }

        .prem-hero {
          position: relative;
          min-height: 680px;
          display: flex;
          align-items: center;
          color: #ffffff;
          background: #121a1d;
          isolation: isolate;
        }

        .prem-hero-image {
          object-fit: cover;
          object-position: center;
          z-index: -2;
        }

        .prem-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(8, 19, 23, 0.96) 0%,
              rgba(8, 19, 23, 0.84) 38%,
              rgba(8, 19, 23, 0.24) 100%
            );
          z-index: -1;
        }

        .prem-hero-content {
          width: min(1220px, calc(100% - 64px));
          margin: 0 auto;
          padding: 100px 0 65px;
        }

        .prem-kicker {
          display: block;
          color: #63df98;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.15em;
          margin-bottom: 26px;
        }

        .prem-hero h1 {
          color: #fff;
          font-size: clamp(44px, 6vw, 82px);
          line-height: 1.06;
          letter-spacing: -0.055em;
          max-width: 950px;
          margin: 0 0 28px;
        }

        .prem-hero h1 span {
          color: #65dd98;
        }

        .prem-hero p {
          color: #dce6e7;
          font-size: 17px;
          line-height: 1.7;
          max-width: 590px;
          margin-bottom: 30px;
        }

        .prem-hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 85px;
        }

        .prem-hero-bottom {
          display: flex;
          gap: 35px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,.25);
          padding-top: 22px;
          color: #d1dddd;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .07em;
        }

        .prem-page section[id] {
          scroll-margin-top: 75px;
        }

        @media (max-width: 700px) {
          .prem-hero {
            min-height: 650px;
            align-items: flex-end;
          }

          .prem-hero-image {
            object-position: 60% center;
          }

          .prem-hero-overlay {
            background: linear-gradient(
              0deg,
              rgba(8,19,23,.97),
              rgba(8,19,23,.82) 55%,
              rgba(8,19,23,.25)
            );
          }

          .prem-hero-content {
            width: calc(100% - 36px);
            padding: 100px 0 40px;
          }

          .prem-hero h1 {
            font-size: clamp(40px, 10vw, 58px);
          }

          .prem-hero p {
            font-size: 14px;
          }

          .prem-hero-actions {
            margin-bottom: 55px;
          }

          .prem-hero-bottom {
            gap: 15px;
            font-size: 10px;
          }
        }

        /* Diseno adaptativo para celulares y tablets */
        .prem-page { overflow-x: clip; }
        .prem-page * { box-sizing: border-box; }
        .prem-page a, .prem-page summary { touch-action: manipulation; }
        .prem-page :focus-visible { outline: 3px solid #35c46c; outline-offset: 3px; }
        .prem-page .prem-products-grid { grid-template-columns:repeat(3,minmax(0,1fr)); }
        .prem-page .prem-product-card { min-width:0; }
        .prem-page .prem-product-media img { max-width:100%; }
        .prem-page .prem-base-grid { grid-template-columns:repeat(2,minmax(0,1fr)) !important; }
        .prem-page .prem-section { scroll-margin-top:75px; }
        .prem-page .prem-details summary { min-height:44px; display:flex; align-items:center; }
        @media (max-width:1000px) {
          .prem-page .prem-products-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
          .prem-hero { min-height:610px; }
          .prem-hero-content { width:calc(100% - 44px); }
          .prem-page .prem-section { padding-inline:22px; }
        }
        @media (max-width:640px) {
          .prem-hero { min-height:640px; align-items:flex-end; }
          .prem-hero-content { width:calc(100% - 32px); padding:105px 0 30px; }
          .prem-hero h1 { font-size:clamp(36px,9.5vw,53px); letter-spacing:-.04em; line-height:1.08; overflow-wrap:break-word; }
          .prem-hero p { font-size:15px; line-height:1.6; }
          .prem-kicker { font-size:10px; letter-spacing:.09em; line-height:1.5; }
          .prem-hero-actions { display:grid; grid-template-columns:1fr; gap:10px; margin:25px 0 35px; }
          .prem-hero-actions .btn { width:100%; display:flex; min-height:48px; align-items:center; justify-content:center; text-align:center; }
          .prem-hero-bottom { display:grid; grid-template-columns:1fr; gap:8px; padding-top:15px; font-size:10px; }
          .prem-page .prem-section { padding:54px 16px; }
          .prem-page .prem-section h2 { font-size:clamp(30px,8vw,41px); line-height:1.14; overflow-wrap:break-word; }
          .prem-page .prem-section > p { font-size:15px; line-height:1.6; }
          .prem-page .prem-products-grid { grid-template-columns:1fr !important; gap:16px !important; margin-top:20px !important; }
          .prem-page .prem-product-card { width:100%; }
          .prem-page .prem-product-media { height:225px !important; padding:14px !important; }
          .prem-page .prem-base-grid { grid-template-columns:1fr !important; gap:18px !important; }
          .prem-page .prem-base-grid img { max-width:100%; height:auto; }
          .prem-page .prem-section .actions { display:grid; grid-template-columns:1fr; }
          .prem-page .prem-section .actions .btn { width:100%; text-align:center; min-height:48px; display:flex; justify-content:center; align-items:center; }
          .prem-page details { max-width:100%; }
          .prem-page details p { overflow-wrap:break-word; }
        }
        @media (max-width:370px) {
          .prem-hero-content { width:calc(100% - 26px); }
          .prem-hero h1 { font-size:34px; }
          .prem-page .prem-section { padding-inline:13px; }
        }
      `}</style>
    </main>
  );
}
