import Image from 'next/image';
import { ButtonLink } from '../../components/Site';

export const metadata = {
  title: 'Soluciones industriales',
};

const bloques = [
  {
    id: 'digital',
    number: '01',
    eyebrow: 'CAPACIDAD PRINCIPAL',
    title: 'Soluciones digitales y automatización',
    description:
      'Desarrollo de herramientas digitales para ordenar procesos, centralizar información, automatizar tareas y mejorar la operación diaria.',
    items: [
      'Sistemas de gestión a medida',
      'Automatización de procesos administrativos y operativos',
      'Dashboards e indicadores para seguimiento',
      'Integración entre formularios, bases de datos y reportes',
      'Digitalización de relevamientos y flujos de trabajo',
      'Soluciones web para operaciones, mantenimiento y seguimiento',
    ],
  },
  {
    id: 'metalmecanica',
    number: '02',
    eyebrow: 'FABRICACIÓN INDUSTRIAL',
    title: 'Corte láser, plegado y desarrollos en chapa',
    description:
      'Alternativas metalmecánicas para resolver soportes, separadores, protecciones, piezas técnicas y soluciones bajo plano.',
    items: [
      'Corte láser en chapa',
      'Plegado y conformado',
      'Gabinetes y envolventes',
      'Separadores y protecciones industriales',
      'Soportes, estructuras y piezas especiales',
      'Desarrollos a medida según necesidad',
    ],
  },
  {
    id: 'reciclados',
    number: '03',
    eyebrow: 'NUEVOS MATERIALES',
    title: 'Conceptos y aplicaciones con plásticos reciclados',
    description:
      'Ideas para explorar productos y componentes con material reciclado, orientados a entornos industriales, energéticos e infraestructura.',
    items: [
      'Perfiles y apoyos técnicos',
      'Separadores y topes',
      'Protecciones y defensas',
      'Señalización y mobiliario técnico',
      'Piezas para logística e infraestructura',
      'Desarrollos con enfoque de recuperación y circularidad',
    ],
  },
];

export default function Soluciones() {
  return (
    <main className="sol-page">
      <section className="sol-hero">
        <Image
          src="/soluciones/portada.webp"
          alt="Soluciones industriales, automatización y fabricación"
          fill
          priority
          sizes="100vw"
          className="sol-hero-image"
        />

        <div className="sol-hero-overlay" />

        <div className="sol-hero-content">
          <span className="sol-kicker">CAPACIDADES Y OPORTUNIDADES</span>

          <h1>
            Soluciones para
            <br />
            <span>necesidades reales.</span>
          </h1>

          <p>
            Tecnología, automatización, desarrollos metalmecánicos y
            aplicaciones con materiales reciclados para iniciar conversaciones
            técnicas y comerciales.
          </p>

          <div className="sol-hero-actions">
            <a href="#digital" className="btn">
              Ver soluciones ↓
            </a>
            <ButtonLink href="/contacto" secondary>
              Plantear una necesidad
            </ButtonLink>
          </div>

          <div className="sol-hero-bottom">
            <span>DIGITALIZACIÓN</span>
            <span>METALMECÁNICA</span>
            <span>PLÁSTICOS RECICLADOS</span>
          </div>
        </div>
      </section>

      <section className="section compact">
        <span className="eyebrow">ENFOQUE COMERCIAL</span>
        <h2>Aplicaciones para explorar y desarrollar.</h2>
        <p className="lead">
          Estas propuestas presentan líneas de trabajo posibles. La factibilidad
          final depende del contexto, la escala, los requisitos técnicos y la
          disponibilidad de fabricación o desarrollo.
        </p>
      </section>

      {bloques.map((bloque, i) => (
        <section
          key={bloque.id}
          id={bloque.id}
          className={`section ${i % 2 === 1 ? 'muted' : ''}`}
        >
          <span className="eyebrow">
            {bloque.number} / {bloque.eyebrow}
          </span>

          <h2>{bloque.title}</h2>
          <p>{bloque.description}</p>

          <div className="solution-grid">
            {bloque.items.map((item) => (
              <article className="solution-item" key={item}>
                <h3>{item}</h3>
                <p>
                  Aplicación potencial a evaluar según objetivo, entorno,
                  dimensiones, cargas, proceso y requerimientos técnicos.
                </p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="section">
        <div className="sol-banner">
          <div>
            <span className="eyebrow">PRÓXIMO PASO</span>
            <h2>Convirtamos una necesidad en una propuesta.</h2>
            <p>
              Si tenés un problema concreto, una idea o una oportunidad para
              desarrollar, podemos ordenarla y transformarla en una línea de
              trabajo viable.
            </p>
          </div>

          <div className="actions">
            <ButtonLink href="/contacto">
              Plantear un desarrollo
            </ButtonLink>
          </div>
        </div>
      </section>

      <style>{`
        .sol-page {
          overflow: hidden;
        }

        .sol-hero {
          position: relative;
          min-height: 680px;
          display: flex;
          align-items: center;
          color: #fff;
          background: #121a1d;
          isolation: isolate;
        }

        .sol-hero-image {
          object-fit: cover;
          object-position: center;
          z-index: -2;
        }

        .sol-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(8, 19, 23, 0.95) 0%,
              rgba(8, 19, 23, 0.84) 38%,
              rgba(8, 19, 23, 0.24) 100%
            );
          z-index: -1;
        }

        .sol-hero-content {
          width: min(1220px, calc(100% - 64px));
          margin: 0 auto;
          padding: 110px 0 60px;
        }

        .sol-kicker {
          display: block;
          color: #63df98;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          margin-bottom: 24px;
        }

        .sol-hero h1 {
          font-size: clamp(44px, 6vw, 82px);
          line-height: 1.05;
          letter-spacing: -0.055em;
          max-width: 900px;
          margin: 0 0 24px;
          color: #fff;
        }

        .sol-hero h1 span {
          color: #65dd98;
        }

        .sol-hero p {
          max-width: 650px;
          color: #d8e3e4;
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .sol-hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 80px;
        }

        .sol-hero-bottom {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,.22);
          padding-top: 22px;
          color: #d1dddd;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
        }

        .solution-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .solution-item {
          background: #fff;
          border: 1px solid #dce4e4;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 6px 20px rgba(18,26,29,.035);
        }

        .solution-item h3 {
          margin: 0 0 10px;
          font-size: 22px;
          line-height: 1.2;
        }

        .solution-item p {
          margin: 0;
          color: #536166;
          font-size: 14px;
          line-height: 1.65;
        }

        .sol-banner {
          background: #121a1d;
          color: #fff;
          border-radius: 22px;
          padding: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .sol-banner p {
          color: #d7e2e3;
          max-width: 760px;
        }

        @media (max-width: 700px) {
          .sol-hero {
            min-height: 640px;
            align-items: flex-end;
          }

          .sol-hero-image {
            object-position: 62% center;
          }

          .sol-hero-overlay {
            background: linear-gradient(
              0deg,
              rgba(8,19,23,.97),
              rgba(8,19,23,.82) 55%,
              rgba(8,19,23,.25)
            );
          }

          .sol-hero-content {
            width: calc(100% - 36px);
            padding: 95px 0 38px;
          }

          .sol-hero h1 {
            font-size: clamp(38px, 10vw, 58px);
          }

          .sol-hero p {
            font-size: 14px;
          }

          .sol-hero-actions {
            margin-bottom: 50px;
          }

          .sol-hero-bottom {
            gap: 12px;
            font-size: 10px;
          }

          .sol-banner {
            padding: 24px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}