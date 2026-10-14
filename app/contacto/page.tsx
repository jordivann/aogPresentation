import type { Metadata } from 'next';
import { ContactForm } from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto comercial | Industrial Solutions',
  description: 'Contactá por WhatsApp, correo o teléfono para conversar sobre desarrollo digital, automatización, fabricación y soluciones industriales.',
};

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-head">
        <div className="contact-shell">
          <span className="contact-kicker">CONTACTO COMERCIAL</span>
          <h1>Iniciemos una <em>conversación.</em></h1>
          <p>Contanos qué necesitás mejorar, desarrollar o resolver. Podemos partir de una idea, un requerimiento o una necesidad operativa concreta.</p>
          <div className="contact-head-tags" aria-label="Áreas de trabajo">
            <span>Desarrollo digital</span><span>Automatización</span><span>Industria</span><span>Materiales</span>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-shell contact-grid">
          <aside className="contact-aside">
            <span className="contact-kicker">DESARROLLO DE NEGOCIOS</span>
            <h2>Un primer contacto, sin complicaciones.</h2>
            <p>Conversemos sobre oportunidades de automatización, soluciones digitales, fabricación metalmecánica, infraestructura y nuevos desarrollos con materiales reciclados.</p>
            <div className="contact-note">
              <strong>Para empezar</strong>
              <p>Contanos brevemente tu empresa, la necesidad y el contexto. Podemos coordinar una conversación y definir juntos los próximos pasos.</p>
            </div>
            <p className="contact-person">Jordi Van Norden <span>Desarrollo de negocios · Soluciones industriales</span></p>
          </aside>
          <div className="contact-methods-wrap">
            <span className="contact-kicker">ELEGÍ CÓMO CONTACTARNOS</span>
            <h2>Estamos a un mensaje de distancia.</h2>
            <p>Elegí el canal que te resulte más cómodo y escribinos directamente.</p>
            <ContactForm />
          </div>
        </div>
      </section>
      <style>{`
        .contact-page{color:#18282b;background:white;overflow-x:clip}.contact-page *{box-sizing:border-box}
        .contact-shell{width:min(1120px,calc(100% - 48px));margin:auto}
        .contact-head{background:#13262a;color:#fff;padding:94px 0 82px;position:relative;overflow:hidden}
        .contact-head:after{content:"";pointer-events:none;position:absolute;right:-140px;bottom:-320px;width:610px;height:610px;border-radius:50%;border:100px solid rgba(101,223,152,.055)}
        .contact-kicker{color:#238656;letter-spacing:.13em;font-size:11px;font-weight:800}
        .contact-head .contact-kicker{color:#74e6a6}
        .contact-head h1{font-size:clamp(43px,6vw,74px);line-height:1.08;letter-spacing:-.055em;max-width:850px;margin:20px 0;color:#fff}
        .contact-head h1 em{font-style:normal;color:#65df98}
        .contact-head p{color:#d0dddc;line-height:1.65;max-width:700px;font-size:17px}
        .contact-head-tags{display:flex;flex-wrap:wrap;gap:9px;margin-top:30px}
        .contact-head-tags span{padding:9px 12px;border:1px solid rgba(255,255,255,.19);border-radius:5px;font-size:11px;font-weight:650;color:#dbe9e3}
        .contact-section{padding:75px 0 100px}
        .contact-grid{display:grid;grid-template-columns:.75fr 1.25fr;align-items:start;gap:65px}
        .contact-aside h2{font-size:clamp(27px,3vw,39px);line-height:1.16;letter-spacing:-.035em;margin:20px 0}
        .contact-aside>p:not(.contact-person){color:#607273;line-height:1.65;font-size:15px}
        .contact-note{border-left:3px solid #2db674;background:#f1f6f3;padding:20px;margin-top:32px}
        .contact-note p{color:#627474;font-size:13px;line-height:1.6;margin-bottom:0}
        .contact-person{font-size:14px;font-weight:800;margin-top:28px}
        .contact-person span{display:block;font-size:12px;font-weight:500;color:#637875;margin-top:5px}
        .contact-methods-wrap{min-width:0}
        .contact-methods-wrap h2{font-size:clamp(26px,3.1vw,36px);line-height:1.15;letter-spacing:-.035em;margin:12px 0 9px}
        .contact-methods-wrap>p{color:#627473;font-size:14px;margin:0 0 25px;line-height:1.65}
        @media(max-width:750px){.contact-shell{width:calc(100% - 36px)}.contact-head{padding:72px 0 62px}.contact-head h1{font-size:clamp(40px,10vw,54px)}.contact-head p{font-size:15px}.contact-section{padding:48px 0 70px}.contact-grid{grid-template-columns:1fr;gap:36px}.contact-aside h2{margin:14px 0}.contact-note{margin-top:22px}.contact-person{margin-top:20px}}
      `}</style>
    </main>
  );
}
