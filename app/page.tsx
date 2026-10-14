import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soluciones industriales y digitales | Industrial Solutions',
  description:
    'Desarrollo de soluciones digitales y automatización, infraestructura eléctrica, premoldeados y oportunidades de fabricación industrial.',
};

const areas = [
  {
    number: '01',
    eyebrow: 'TECNOLOGÍA Y PROCESOS',
    title: 'Soluciones digitales y automatización',
    description:
      'Sistemas de gestión, integración de información, automatización de tareas y herramientas digitales diseñadas para cada operación.',
    href: '/soluciones#digital',
    action: 'Explorar soluciones digitales',
  },
  {
    number: '02',
    eyebrow: 'INFRAESTRUCTURA ELÉCTRICA',
    title: 'Crucetas MAPLASTO MN 111',
    description:
      'Crucetas de plástico reciclado con ensayos de flexión, torsión y absorción documentados por INTI, y propuesta de recupero posuso en desarrollo.',
    href: '/crucetas',
    action: 'Conocer la cruceta',
  },
  {
    number: '03',
    eyebrow: 'HORMIGÓN PREMOLDEADO',
    title: 'Columnas y bases para contenedores',
    description:
      'Modelos de premoldeados de hormigón para evaluar en infraestructura y proyectos constructivos, con dimensiones y características técnicas.',
    href: '/premoldeados',
    action: 'Ver premoldeados',
  },
  {
    number: '04',
    eyebrow: 'DESARROLLOS INDUSTRIALES',
    title: 'Metalmecánica y materiales recuperados',
    description:
      'Conceptos en corte láser, plegado de chapa, soportes, protecciones y aplicaciones con plásticos reciclados, sujetos a factibilidad.',
    href: '/soluciones#metalmecanica',
    action: 'Explorar aplicaciones',
  },
];

export default function Home() {
  return (
    <main className="home-v2">
      <section className="home-hero" aria-labelledby="home-title">
        <Image
          className="home-hero-photo"
          src="/soluciones/portada.webp"
          alt="Tecnología, automatización y fabricación industrial"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero-shade" />
        <div className="home-shell home-hero-content">
          <span className="home-kicker">TECNOLOGÍA · INDUSTRIA · INFRAESTRUCTURA</span>
          <h1 id="home-title">
            Soluciones para <span>desafíos reales.</span>
          </h1>
          <p>
            Combinamos desarrollo digital, evaluación técnica y oportunidades de
            fabricación para transformar necesidades operativas en propuestas concretas.
          </p>
          <div className="home-actions">
            <Link href="/soluciones" className="home-button home-button-primary">
              Explorar soluciones <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/contacto" className="home-button home-button-outline">
              Presentar una necesidad <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="home-hero-foot">
            <span>DESARROLLO DIGITAL</span>
            <span>INFRAESTRUCTURA</span>
            <span>FABRICACIÓN A MEDIDA</span>
          </div>
        </div>
      </section>

      <section className="home-section home-shell" aria-labelledby="home-areas">
        <div className="home-section-heading">
          <div>
            <span className="home-eyebrow">ÁREAS DE TRABAJO</span>
            <h2 id="home-areas">Distintas capacidades. <span>Un mismo enfoque.</span></h2>
          </div>
          <p>
            Conectamos oportunidades comerciales con el desarrollo adecuado,
            desde soluciones de software hasta infraestructura y productos industriales.
          </p>
        </div>
        <div className="home-grid">
          {areas.map((area) => (
            <article className="home-card" key={area.number}>
              <div className="home-card-top">
                <span>{area.number}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <span className="home-card-eyebrow">{area.eyebrow}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <Link href={area.href} className="home-card-link">
                {area.action} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-process">
        <div className="home-shell home-process-inner">
          <div>
            <span className="home-eyebrow">CÓMO TRABAJAMOS</span>
            <h2>Primero entendemos la necesidad.<br /><span>Después diseñamos el camino.</span></h2>
          </div>
          <div className="home-process-copy">
            <p>
              Relevamos el contexto, evaluamos alternativas y coordinamos los próximos
              pasos con los actores técnicos y comerciales correspondientes.
            </p>
            <Link href="/como-trabajamos" className="home-button home-button-dark">
              Conocer nuestra metodología <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-shell home-cta-inner">
          <div>
            <span className="home-eyebrow">EMPECEMOS UNA CONVERSACIÓN</span>
            <h2>¿Tenés una necesidad que merece una solución mejor?</h2>
            <p>Compartinos el desafío y exploremos una respuesta técnica y comercial viable.</p>
          </div>
          <Link href="/contacto" className="home-button home-button-primary">
            Contactar <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <style>{`
        .home-v2{background:#fff;color:#17272a;overflow-x:clip}
        .home-v2 *{box-sizing:border-box}
        .home-v2 p{line-height:1.65}
        .home-shell{width:min(1220px,calc(100% - 64px));margin-inline:auto}
        .home-hero{min-height:690px;position:relative;display:flex;align-items:center;color:#fff;background:#102027;isolation:isolate}
        .home-hero-photo{object-fit:cover;object-position:center;z-index:-2}
        .home-hero-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(7,18,22,.98) 0%,rgba(7,18,22,.91) 36%,rgba(7,18,22,.39) 75%,rgba(7,18,22,.12) 100%);z-index:-1}
        .home-hero-content{padding-block:100px 50px}
        .home-kicker,.home-eyebrow{display:block;color:#38bf77;font-size:11px;font-weight:800;letter-spacing:.15em}
        .home-kicker{color:#75e7a6}
        .home-hero h1{color:white;font-size:clamp(46px,6.6vw,90px);letter-spacing:-.06em;line-height:1.03;max-width:880px;margin:27px 0}
        .home-hero h1 span{color:#62da97}
        .home-hero-content>p{font-size:18px;color:#dce6e4;max-width:650px}
        .home-actions{display:flex;flex-wrap:wrap;gap:13px;margin:34px 0 85px}
        .home-button{min-height:50px;padding:15px 20px;display:inline-flex;justify-content:space-between;align-items:center;gap:28px;border-radius:7px;font-size:13px;font-weight:750;text-decoration:none!important;transition:transform .18s ease}
        .home-button:hover{transform:translateY(-2px)}
        .home-button-primary{background:#35c46c;color:#10251b!important}
        .home-button-outline{border:1px solid #c1d1ce;background:rgba(14,28,31,.35);color:#fff!important}
        .home-button-dark{background:#16292a;color:#fff!important}
        .home-hero-foot{display:flex;flex-wrap:wrap;gap:32px;border-top:1px solid #ffffff45;padding-top:21px;color:#cfddda;font-size:11px;font-weight:750;letter-spacing:.08em}
        .home-section{padding-block:95px}
        .home-section-heading{display:grid;grid-template-columns:1.3fr .7fr;gap:40px;align-items:end;margin-bottom:32px}
        .home-section-heading h2,.home-process h2,.home-cta h2{font-size:clamp(34px,4.5vw,62px);letter-spacing:-.05em;line-height:1.12;margin:18px 0 0}
        .home-section-heading h2 span{color:#899898}
        .home-section-heading>p{font-size:15px;color:#637476;margin:0}
        .home-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
        .home-card{border:1px solid #dbe5e2;background:#f7f9f8;border-radius:12px;padding:27px;display:flex;flex-direction:column;min-height:306px}
        .home-card-top{display:flex;justify-content:space-between;color:#168851;font-size:13px;font-weight:800}
        .home-card-top span:last-child{font-size:22px}
        .home-card-eyebrow{margin-top:22px;color:#6b7e79;font-size:10px;font-weight:800;letter-spacing:.09em}
        .home-card h3{font-size:clamp(21px,2.4vw,30px);line-height:1.2;letter-spacing:-.035em;margin:11px 0}
        .home-card p{font-size:14px;color:#576b6a;margin:0 0 26px}
        .home-card-link{margin-top:auto;color:#11744a;font-weight:800;font-size:13px;text-decoration:none}
        .home-card-link:hover{text-decoration:underline}
        .home-process{background:#f1f5f3;padding:80px 0}
        .home-process-inner{display:grid;grid-template-columns:1.15fr .85fr;gap:60px;align-items:center}
        .home-process h2 span{color:#879794}
        .home-process-copy p{color:#586e6b;font-size:16px;margin:0 0 25px}
        .home-cta{background:#122429;padding:80px 0;color:#fff}
        .home-cta-inner{display:flex;align-items:center;justify-content:space-between;gap:30px}
        .home-cta .home-eyebrow{color:#67dfa0}
        .home-cta h2{color:#fff;max-width:780px}
        .home-cta p{color:#c9d9d6;max-width:700px;font-size:15px}
        .home-cta .home-button{flex-shrink:0}
        @media(max-width:900px){.home-section-heading,.home-process-inner{grid-template-columns:1fr;gap:20px}.home-cta-inner{align-items:flex-start;flex-direction:column}}
        @media(max-width:700px){
          .home-shell{width:calc(100% - 36px)}
          .home-hero{min-height:690px;align-items:flex-end}
          .home-hero-photo{object-position:58% center}
          .home-hero-shade{background:linear-gradient(0deg,rgba(7,18,22,.98),rgba(7,18,22,.88) 55%,rgba(7,18,22,.29))}
          .home-hero-content{padding:105px 0 34px}
          .home-hero h1{font-size:clamp(40px,11vw,62px);margin:22px 0}
          .home-hero-content>p{font-size:14px}
          .home-actions{flex-direction:column;margin:27px 0 50px}
          .home-actions .home-button{width:100%}
          .home-hero-foot{gap:13px;font-size:10px}
          .home-section{padding-block:58px}
          .home-grid{grid-template-columns:1fr}
          .home-card{min-height:0;padding:24px}
          .home-process,.home-cta{padding:59px 0}
          .home-cta .home-button{width:100%}
        }
        @media(prefers-reduced-motion:reduce){.home-v2 *{transition:none!important}}
      `}</style>
    </main>
  );
}
