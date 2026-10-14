import Link from 'next/link';

const PHONE_DISPLAY = '+54 9 3517 49-7341';
const PHONE_E164 = '+5493517497341';
const WHATSAPP = 'https://wa.me/5493517497341?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20una%20soluci%C3%B3n%20industrial.';
const EMAIL = 'jordievannorden@gmail.com';
const EMAIL_LINK = 'mailto:jordievannorden@gmail.com?subject=Consulta%20comercial%20-%20Soluciones%20industriales';

/**
 * Se conserva el nombre ContactForm para no romper los imports existentes.
 * Este componente no recopila ni procesa datos: abre los canales directos del usuario.
 */
export function ContactForm() {
  return (
    <div className="contact-direct" aria-label="Canales de contacto comercial">
      <a className="contact-channel contact-channel-featured" href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Iniciar conversación por WhatsApp">
        <span className="contact-channel-icon" aria-hidden="true">✳</span>
        <span className="contact-channel-copy">
          <span className="contact-channel-label">RESPUESTA DIRECTA</span>
          <strong>Conversar por WhatsApp</strong>
          <span>{PHONE_DISPLAY}</span>
          <small>Consultas, presentación de proyectos y coordinación de reuniones.</small>
        </span>
        <span className="contact-channel-arrow" aria-hidden="true">↗</span>
      </a>

      <div className="contact-channel-grid">
        <a className="contact-channel" href={EMAIL_LINK} aria-label={`Enviar correo a ${EMAIL}`}>
          <span className="contact-channel-icon" aria-hidden="true">@</span>
          <span className="contact-channel-copy">
            <span className="contact-channel-label">CORREO ELECTRÓNICO</span>
            <strong>Enviar un correo</strong>
            <span className="contact-break">{EMAIL}</span>
            <small>Para consultas comerciales y documentación no confidencial.</small>
          </span>
          <span className="contact-channel-arrow" aria-hidden="true">↗</span>
        </a>
        <a className="contact-channel" href={`tel:${PHONE_E164}`} aria-label={`Llamar al ${PHONE_DISPLAY}`}>
          <span className="contact-channel-icon" aria-hidden="true">☎</span>
          <span className="contact-channel-copy">
            <span className="contact-channel-label">LLAMADA TELEFÓNICA</span>
            <strong>Realizar una llamada</strong>
            <span>{PHONE_DISPLAY}</span>
            <small>Para conversar sobre una necesidad o coordinar una reunión.</small>
          </span>
          <span className="contact-channel-arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <p className="contact-direct-note">Los enlaces abren WhatsApp, tu aplicación de correo o la función de llamada del dispositivo. No almacenamos consultas en esta página.</p>
      <style>{`
        .contact-direct,.contact-direct *{box-sizing:border-box}
        .contact-direct{display:grid;gap:15px;min-width:0}
        .contact-channel{min-width:0;display:flex;align-items:flex-start;gap:15px;padding:24px 22px;background:#fff;border:1px solid #dce7e2;border-radius:13px;color:#17292c;text-decoration:none;transition:transform .18s,border-color .18s,box-shadow .18s}
        .contact-channel:hover{transform:translateY(-2px);border-color:#63b88c;box-shadow:0 12px 28px rgba(18,51,39,.08)}
        .contact-channel:focus-visible{outline:3px solid #2aa768;outline-offset:3px}
        .contact-channel-featured{background:#16352e;border-color:#16352e;color:#fff;padding:27px 24px}
        .contact-channel-featured:hover{border-color:#55d18b}
        .contact-channel-icon{flex:0 0 44px;height:44px;border-radius:11px;display:grid;place-items:center;background:#e6f4ec;color:#137d4d;font-size:23px;font-weight:700;line-height:1}
        .contact-channel-featured .contact-channel-icon{background:#2a5643;color:#8af1b3}
        .contact-channel-copy{flex:1;min-width:0;display:flex;flex-direction:column;gap:5px}
        .contact-channel-label{font-size:10px;font-weight:850;letter-spacing:.12em;color:#238054}
        .contact-channel-featured .contact-channel-label{color:#8af1b3}
        .contact-channel-copy strong{font-size:20px;line-height:1.25;letter-spacing:-.025em}
        .contact-channel-copy>span:not(.contact-channel-label){font-size:14px;font-weight:650;overflow-wrap:anywhere}
        .contact-channel-copy small{font-size:12px;line-height:1.6;color:#6a7b79;font-weight:400;margin-top:3px}
        .contact-channel-featured .contact-channel-copy small{color:#c8dcd3}
        .contact-channel-arrow{font-size:20px;line-height:1;margin-left:auto;color:#1a8c57}
        .contact-channel-featured .contact-channel-arrow{color:#8af1b3}
        .contact-channel-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}
        .contact-direct-note{margin:3px 0 0;font-size:12px;line-height:1.6;color:#677b78}
        @media(max-width:740px){.contact-channel-grid{grid-template-columns:1fr}.contact-channel{padding:20px 17px;gap:12px}.contact-channel-featured{padding:24px 17px}.contact-channel-icon{flex-basis:40px;height:40px;font-size:21px}.contact-channel-copy strong{font-size:18px}}
        @media(prefers-reduced-motion:reduce){.contact-channel{transition:none}.contact-channel:hover{transform:none}}
      `}</style>
    </div>
  );
}
