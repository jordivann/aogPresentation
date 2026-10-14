import Image from 'next/image';
import { ButtonLink } from '../../components/Site';

export const metadata = {
  title: 'Encuentro AOG Patagonia 2026',
};

export default function AOG() {
  return (
    <main className="aog-page">
      <section className="aog-hero">
        <Image
          src="/aog/portada.webp"
          alt="Encuentro industrial y energético AOG Patagonia 2026"
          fill
          priority
          sizes="100vw"
          className="aog-hero-image"
        />

        <div className="aog-hero-overlay" />

        <div className="aog-hero-content">
          <span className="aog-kicker">AOG PATAGONIA 2026 · NEUQUÉN</span>

          <h1>
            Conectemos ideas con
            <br />
            <span>soluciones industriales.</span>
          </h1>

          <p>
            Materiales reciclados, infraestructura eléctrica, premoldeados
            y desarrollos a medida para necesidades reales de la industria.
          </p>

          <div className="aog-hero-actions">
            <ButtonLink href="/contacto">
              Contactar / coordinar reunión
            </ButtonLink>
            <ButtonLink href="/soluciones" secondary>
              Explorar soluciones
            </ButtonLink>
          </div>

          <div className="aog-hero-bottom">
            <span>INFRAESTRUCTURA ELÉCTRICA</span>
            <span>DESARROLLO INDUSTRIAL</span>
            <span>TECNOLOGÍA Y AUTOMATIZACIÓN</span>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="eyebrow">OPORTUNIDADES DE CONVERSACIÓN</span>
        <h2>Áreas para explorar durante AOG Patagonia</h2>
        <p className="lead">
          Un punto de encuentro para conversar necesidades, detectar
          oportunidades y evaluar alternativas técnicas y comerciales.
        </p>

        <div className="cards">
          <article className="card">
            <span>01</span>
            <h3>Infraestructura eléctrica</h3>
            <p>
              Conocé la cruceta MAPLASTO MN 111 y su estado de validación
              técnica y comercial.
            </p>
            <ButtonLink href="/crucetas" secondary>
              Ver ficha
            </ButtonLink>
          </article>

          <article className="card">
            <span>02</span>
            <h3>Premoldeados</h3>
            <p>
              Columnas huecas y bases para contenedores para evaluar en obras,
              estructuras e infraestructura.
            </p>
            <ButtonLink href="/premoldeados" secondary>
              Ver productos
            </ButtonLink>
          </article>

          <article className="card">
            <span>03</span>
            <h3>Soluciones industriales</h3>
            <p>
              Desarrollo digital, automatización, metalmecánica y aplicaciones
              con materiales reciclados.
            </p>
            <ButtonLink href="/soluciones" secondary>
              Explorar
            </ButtonLink>
          </article>
        </div>

        <div className="actions">
          <ButtonLink href="/contacto">
            Coordinar una conversación
          </ButtonLink>
        </div>
      </section>

      <style>{`
        .aog-page {
          overflow: hidden;
        }

        .aog-hero {
          position: relative;
          min-height: 680px;
          display: flex;
          align-items: center;
          color: #fff;
          background: #121a1d;
          isolation: isolate;
        }

        .aog-hero-image {
          object-fit: cover;
          object-position: center;
          z-index: -2;
        }

        .aog-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(8, 19, 23, 0.94) 0%,
              rgba(8, 19, 23, 0.84) 38%,
              rgba(8, 19, 23, 0.24) 100%
            );
          z-index: -1;
        }

        .aog-hero-content {
          width: min(1220px, calc(100% - 64px));
          margin: 0 auto;
          padding: 110px 0 60px;
        }

        .aog-kicker {
          display: block;
          color: #63df98;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          margin-bottom: 24px;
        }

        .aog-hero h1 {
          font-size: clamp(44px, 6vw, 82px);
          line-height: 1.05;
          letter-spacing: -0.055em;
          max-width: 900px;
          margin: 0 0 24px;
          color: #fff;
        }

        .aog-hero h1 span {
          color: #65dd98;
        }

        .aog-hero p {
          max-width: 620px;
          color: #d8e3e4;
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .aog-hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 80px;
        }

        .aog-hero-bottom {
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

        @media (max-width: 700px) {
          .aog-hero {
            min-height: 640px;
            align-items: flex-end;
          }

          .aog-hero-image {
            object-position: 60% center;
          }

          .aog-hero-overlay {
            background: linear-gradient(
              0deg,
              rgba(8,19,23,.97),
              rgba(8,19,23,.82) 55%,
              rgba(8,19,23,.25)
            );
          }

          .aog-hero-content {
            width: calc(100% - 36px);
            padding: 95px 0 38px;
          }

          .aog-hero h1 {
            font-size: clamp(38px, 10vw, 58px);
          }

          .aog-hero p {
            font-size: 14px;
          }

          .aog-hero-actions {
            margin-bottom: 50px;
          }

          .aog-hero-bottom {
            gap: 12px;
            font-size: 10px;
          }
        }
      `}</style>
    </main>
  );
}