import Image from 'next/image';

import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {

  title: 'Cruceta MN 111 MAPLASTO | Infraestructura eléctrica',

  description: 'Conocé la cruceta polimérica MAPLASTO MN 111: dimensiones, fotografías reales, ensayos INTI, diferenciales frente a materiales tradicionales, economía circular y consultas comerciales.',

};

type Material = 'reciclado' | 'madera' | 'acero' | 'prfv';

type Opcion = { id: Material; nombre: string; subtitulo: string; ventaja: string; limite: string; tono: string };

type Criterio = { nombre: string; lectura: string; destacado: string; nivel: string; detalles: Record<Material, string> };

const opciones: Opcion[] = [

  { id: 'reciclado', nombre: 'MAPLASTO MN 111', subtitulo: 'Plástico 100 % reciclado, según fabricante', ventaja: 'No presenta corrosión metálica. INTI midió flexión, torsión y absorción de agua.', limite: 'La aptitud se evalúa según cargas, condiciones de servicio y especificaciones de cada proyecto.', tono: 'green' },

  { id: 'madera', nombre: 'Frente a madera dura', subtitulo: 'Referencia tradicional; no comercializada aquí', ventaja: 'MAPLASTO evita la degradación biológica propia de la madera y declara contenido reciclado.', limite: 'La resistencia y vida útil dependen del diseño y las condiciones de exposición.', tono: 'brown' },

  { id: 'acero', nombre: 'Frente a acero galvanizado', subtitulo: 'Referencia industrial; no comercializada aquí', ventaja: 'MAPLASTO no se oxida y no es un conductor metálico.', limite: 'Peso y precio se comparan con soluciones de capacidad y geometría equivalentes.', tono: 'blue' },

  { id: 'prfv', nombre: 'Frente a PRFV', subtitulo: 'Referencia polimérica; no comercializada aquí', ventaja: 'MAPLASTO declara material reciclado como materia prima.', limite: 'Aislamiento, resistencia y costos dependen del modelo y sus ensayos.', tono: 'violet' },

];

const criterios: Criterio[] = [

  { nombre:'Corrosión y exposición a humedad', lectura:'Ventaja concreta de MAPLASTO frente al acero: no desarrolla óxido de hierro.', destacado:'Ventaja material: MAPLASTO frente a acero', nivel:'Ventaja de composición', detalles:{

    reciclado:'El material no contiene una matriz metálica susceptible de oxidación ferrosa. El INTI midió variaciones de peso de 0,83 %, 0,84 % y 1,17 % tras 24 h de inmersión.',

    madera:'La madera es higroscópica; su estabilidad depende de especie, tratamiento y humedad. No hay ensayo comparativo de estas crucetas.',

    acero:'El galvanizado protege al acero, pero el comportamiento depende de calidad del recubrimiento, ambiente y daños.',

    prfv:'Tampoco presenta corrosión ferrosa; pueden existir otros mecanismos de envejecimiento de la matriz.'} },

  { nombre:'Origen del material y circularidad', lectura:'MAPLASTO declara 100 % de plástico reciclado para su MN 111.', destacado:'Diferencial declarado de MAPLASTO', nivel:'Composición informada por fabricante', detalles:{

    reciclado:'100 % plástico reciclado según MAPLASTO. Se necesita documentación de trazabilidad y, para comparar impacto ambiental, análisis de ciclo de vida.',

    madera:'Es un recurso renovable si proviene de gestión forestal sostenible, pero la comparación de impacto requiere origen y tratamiento.',

    acero:'Es reciclable y puede contener material reciclado; sin dato de un modelo concreto no corresponde comparar porcentajes.',

    prfv:'La reciclabilidad depende de su formulación y circuito de recuperación.'} },

  { nombre:'Aislamiento eléctrico', lectura:'Potencial ventaja frente al acero conductor; el nivel real de aislamiento debe verificarse.', destacado:'UNC: >63 kV comunicado', nivel:'Informe UNC pendiente', detalles:{

    reciclado:'El fabricante comunicó ensayo bajo lluvia y dos probetas sin perforación por encima de 63 kV en las condiciones ensayadas. No equivale a tensión admisible de servicio.',

    madera:'Su resistividad cambia con la humedad; las comparaciones requieren condiciones idénticas.',

    acero:'El acero conduce electricidad. El aislamiento de una estructura depende del sistema con sus aisladores y distancias.',

    prfv:'Muchos diseños de PRFV ofrecen propiedades dieléctricas, que deben comprobarse en cada modelo.'} },

  { nombre:'Resistencia mecánica demostrada', lectura:'INTI aporta resultados medidos de MAPLASTO, no una victoria frente a otros materiales.', destacado:'Ensayos INTI disponibles', nivel:'Sin comparación equivalente', detalles:{

    reciclado:'Cinco unidades ensayadas a flexión: esfuerzo máximo informado 400 daN en cada una. Esfuerzo a desplazamiento del 2 %: 151,0 a 197,8 daN. Torsión: inspección satisfactoria en 5/5.',

    madera:'Depende de especie, defectos, sección y estado de humedad. Faltan ensayos de un modelo equivalente.',

    acero:'Tiene elevada rigidez material y métodos de cálculo establecidos, pero la capacidad depende del diseño de la cruceta.',

    prfv:'Depende de fibras, matriz, orientación y geometría. Hace falta ficha de una pieza comparable.'} },

  { nombre:'Peso y montaje', lectura:'MAPLASTO informa un peso aproximado de 17–18 kg. No hay ganador confirmado.', destacado:'17–18 kg informados', nivel:'Faltan pesos equivalentes', detalles:{

    reciclado:'Peso de referencia declarado para MN 111: aproximadamente 17–18 kg. Las muestras del INTI tienen pesos registrados para el ensayo de agua, sin establecer equivalencia con otros modelos.',

    madera:'Varía ampliamente por especie, humedad y sección.', acero:'Depende del perfil, sección y herrajes.', prfv:'Varía según laminado y diseño estructural.'} },

  { nombre:'Precio de adquisición', lectura:'No hay cotizaciones homogéneas vigentes para afirmar que MAPLASTO sea más barato.', destacado:'Cotización comparable pendiente', nivel:'No publicar ahorro no verificado', detalles:{

    reciclado:'Solicitar precio comercial final por cantidad, fecha, IVA y entrega; el costo interno no se publica.',

    madera:'Cotizar modelo, especie, medidas, preservación y cantidad.', acero:'Cotizar perfil, galvanizado, herrajes, capacidad y transporte.', prfv:'Cotizar diseño, ensayos, capacidad, garantías y entrega.'} },

  { nombre:'Mantenimiento y vida útil', lectura:'MAPLASTO evita el óxido metálico y la putrefacción de madera, pero aún no hay vida útil comparada.', destacado:'Posible ventaja operativa', nivel:'UV y fluencia pendientes', detalles:{

    reciclado:'Solicitar resultados de UV, ciclos térmicos, envejecimiento y fluencia a largo plazo antes de declarar ahorro de mantenimiento.',

    madera:'Requiere evaluación de preservación y exposición.', acero:'La corrosión depende del galvanizado y el ambiente.', prfv:'Depende de resina, radiación UV y uniones.'} },

];

const specs = [

  ['Largo nominal', '2.440 mm'], ['Sección', '90 × 90 mm'],

  ['Perforaciones', 'Ø 19 mm'], ['Peso informado', '≈ 17–18 kg'],

  ['Composición', '100 % reciclado*'], ['Producción informada', '100 unidades/día*'],

];

const imagenes = [

  { src: '/maplasto/vistaFrontal.jpeg', alt: 'Cruceta instalada en estructura eléctrica sobre cielo azul', title: 'Montaje frontal', subtitle: 'Fotografía real proporcionada por MAPLASTO' },

  { src: '/maplasto/instalacion-detalle.webp', alt: 'Detalle de cruceta, aisladores y riostras', title: 'Detalle de instalación', subtitle: 'Fotografía real proporcionada por MAPLASTO' },

  { src: '/maplasto/instalacion.png', alt: 'Vista general de la instalación con cruceta y conductores', title: 'Vista general de instalación', subtitle: 'Fotografía real proporcionada por MAPLASTO' },

];

export default function CrucetasPage() {

  return (

    <main className="mx-page">

      <section className="mx-hero" aria-labelledby="mx-title">

        <Image className="mx-hero-photo" src="/maplasto/instalacion-detalle.webp" alt="Cruceta MAPLASTO instalada en estructura de distribución eléctrica" fill priority sizes="100vw" />

        <div className="mx-hero-gradient" />

        <div className="mx-shell mx-hero-content">

          <div className="mx-kicker"><span className="mx-dot" /> INFRAESTRUCTURA ELÉCTRICA / MAPLASTO</div>

          <h1 id="mx-title">Una nueva materia prima.<br /><em>La misma exigencia técnica.</em></h1>

          <p>Cruceta polimérica MN 111, desarrollada a partir de plástico reciclado. Conocé el producto, su documentación disponible y las condiciones necesarias para evaluar una aplicación real.</p>

          <div className="mx-actions"><a className="mx-button mx-button-green" href="#producto">Explorar producto <span>↗</span></a><Link className="mx-button mx-button-outline" href="/contacto">Solicitar evaluación <span>↗</span></Link></div>

          <div className="mx-hero-caption">Fotografía de instalación proporcionada por MAPLASTO</div>

        </div>

      </section>

      <nav className="mx-sticky" aria-label="Navegación de la página"><div className="mx-shell mx-sticky-inner"><a href="#producto">Producto</a><a href="#galeria">Galería</a><a href="#ensayos">Ensayos INTI</a><a href="#comparacion">Ventajas</a><a href="#circularidad">Circularidad</a><a href="#documentacion">Documentación</a></div></nav>

      <section id="producto" className="mx-section mx-shell">

        <div className="mx-section-top"><span className="mx-overline">01 / PRODUCTO</span><span className="mx-context">Ficha de presentación · MN 111</span></div>

        <div className="mx-product-grid">

          <div><h2>Cruceta MAPLASTO<br/><span>MN 111</span></h2><p className="mx-intro">Una solución de plástico reciclado para proyectos de distribución eléctrica: geometría MN 111, ensayos mecánicos documentados y una propuesta de recuperación de material posuso.</p>

            <div className="mx-spec-grid">{specs.map(([label, value]) => <div key={label} className="mx-spec"><small>{label}</small><strong>{value}</strong></div>)}</div>

            <p className="mx-footnote">* Datos declarados por MAPLASTO. El peso, la capacidad productiva y la composición requieren confirmación documental según el alcance de cada contratación.</p>

            <div className="mx-actions"><a href="/maplasto/presentacion-empresas-2026.pdf" download="MAPLASTO_MN111_Presentacion_Comercial.pdf" className="mx-button mx-button-dark">Descargar presentación <span>↓</span></a><Link href="/contacto" className="mx-button mx-button-green">Solicitar cotización <span>↗</span></Link></div>

          </div>

          <div className="mx-product-visual"><Image src="/maplasto/plano.png" alt="Plano de perforaciones de la cruceta MAPLASTO MN 111" width={1585} height={643} sizes="(max-width: 900px) 100vw, 45vw" /><div className="mx-product-visual-bottom"><span>Geometría y perforaciones</span><strong>Plano MN 111</strong></div><p>Plano extraído de la presentación del fabricante. La configuración final se define según las especificaciones técnicas de cada proyecto.</p></div>

        </div>

      </section>

      <section id="galeria" className="mx-band"><div className="mx-shell mx-section"><div className="mx-section-top"><span className="mx-overline">02 / REGISTRO VISUAL</span></div><div className="mx-title-row"><h2>El producto <span>en contexto.</span></h2><p>Conocé la MN 111 en instalaciones reales y sus detalles constructivos. Las fotografías fueron proporcionadas por MAPLASTO.</p></div><div className="mx-gallery">{imagenes.map((img, i) => <figure className={i === 0 ? 'mx-gallery-featured' : ''} key={img.src}><div className="mx-gallery-photo"><Image src={img.src} alt={img.alt} fill sizes={i === 0 ? '(max-width: 800px) 100vw, 60vw' : '(max-width: 800px) 100vw, 35vw'} /></div><figcaption><strong>{img.title}</strong><span>{img.subtitle}</span></figcaption></figure>)}</div></div></section>

      <section id="ensayos" className="mx-section mx-shell">

        <div className="mx-section-top"><span className="mx-overline">03 / VALIDACIÓN DE LABORATORIO</span><span className="mx-context">INTI · OT 216-8269 · informe de 10/08/2026</span></div>

        <div className="mx-title-row"><h2>Resultados medidos. <span>Evidencia consultable.</span></h2><p>El INTI ensayó muestras remitidas por MAPLASTO, utilizando como referencia lineamientos de <strong>IRAM 13903</strong> y <strong>E-MT-030</strong>. Los resultados corresponden a esas muestras y condiciones, no constituyen homologación.</p></div>

        <div className="mx-tests">

          <article className="mx-test"><small>FLEXIÓN · 5 CRUCETAS</small><strong>400 <em>daN</em></strong><p>Esfuerzo máximo informado en cada muestra. El esfuerzo al desplazamiento del 2 % estuvo entre <b>151,0 y 197,8 daN</b>. No interpretarlo como carga de rotura.</p></article>

          <article className="mx-test"><small>TORSIÓN · 5 CRUCETAS</small><strong>5 / 5</strong><p>Inspección visual <b>satisfactoria</b> después de aplicar 50 daN durante 5 minutos en cada extremo, según metodología del informe.</p></article>

          <article className="mx-test"><small>ABSORCIÓN · 3 CRUCETAS</small><strong>0,83–1,17 <em>%</em></strong><p>Variación de peso informada tras <b>24 horas de inmersión completa</b>, para las tres muestras evaluadas.</p></article>

        </div>

        <div className="mx-unc"><div><span className="mx-unc-tag">UNC · RESULTADO COMUNICADO POR FABRICANTE</span><h3>Ensayos dieléctricos: más de 63 kV sin perforación</h3><p>MAPLASTO informó que en la Universidad Nacional de Córdoba se efectuó un ensayo de cruceta bajo lluvia con medición de corriente y ensayos de perforación eléctrica sobre dos probetas, superando 63 kV sin perforación bajo las condiciones aplicadas.</p><p><b>Estado documental:</b> pendiente de recepción del informe UNC. No constituye homologación, clase de aislamiento ni tensión admisible de servicio.</p></div><span className="mx-unc-value">&gt;63 <small>kV*</small></span></div>

        <div className="mx-actions"><a href="/maplasto/informe-inti-ot-216-8269.pdf" target="_blank" rel="noopener noreferrer" className="mx-button mx-button-dark">Consultar informe INTI completo ↗</a><Link href="/contacto" className="mx-text-link">Solicitar documentación complementaria ↗</Link></div>

        <p className="mx-footnote">* Resultado comunicado por el fabricante, sujeto a verificación del informe UNC. INTI: IF-2026-77309937-APN-SORC#INTI. La publicación de resultados debe ser fiel al informe original y citar a INTI como ejecutor.</p>

      </section>

        {/* ECONOMÍA CIRCULAR Y RECUPERO */}

        <section id="circularidad" className="mx-circular">

        <div className="mx-shell mx-circular-inner">

            <div className="mx-circular-heading">

            <span className="mx-overline">

               04 / ECONOMÍA CIRCULAR / VALOR RECUPERABLE

            </span>

            <h2>

                El material puede volver.

                <span> Su valor también.</span>

            </h2>

            <p>

                MAPLASTO fabrica crucetas a partir de plástico

                reciclado y plantea la posibilidad de recuperar

                material al finalizar su utilización.

            </p>

            <p>

                El modelo propuesto contempla la entrega de crucetas retiradas de servicio o plásticos compatibles para su reciclaje, con la posibilidad de reconocer valor en futuras compras, según condiciones acordadas con MAPLASTO.

            </p>

            </div>

            <div className="mx-circular-steps">

            {[

                {

                number: '01',

                title: 'Utilización',

                description:

                    'La cruceta se incorpora a un proyecto conforme a sus requisitos técnicos.',

                },

                {

                number: '02',

                title: 'Recuperación',

                description:

                    'Al retirarla de servicio, se evalúa la recepción del material para reciclaje.',

                },

                {

                number: '03',

                title: 'Nuevo valor',

                description:

                    'El material aceptado puede generar un beneficio comercial para una próxima compra.',

                },

            ].map((step) => (

                <article

                key={step.number}

                className="mx-circular-step"

                >

                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                </article>

            ))}

            </div>

            <div className="mx-circular-footer">

            <div>

                <strong>

                Una oportunidad para reducir residuos

                y recuperar valor.

                </strong>

                <p>

                La recepción, el tipo de material aceptado,

                la logística y los beneficios económicos

                estarán sujetos a las condiciones acordadas

                con el fabricante.

                </p>

            </div>

            <Link

                href="/contacto"

                className="mx-button mx-button-green"

            >

                Consultar recupero de materiales

                <span>↗</span>

            </Link>

            </div>

        </div>

        </section>

      <section id="comparacion" className="mx-section mx-shell"><div className="mx-section-top"><span className="mx-overline">05 / DIFERENCIALES DE MAPLASTO</span><span className="mx-context">Ventajas de MAPLASTO · evaluación responsable</span></div><div className="mx-title-row"><h2>¿Por qué evaluar MAPLASTO frente <span>a materiales tradicionales?</span></h2><p>Ofrecemos MAPLASTO; los otros materiales son referencias de mercado, no productos de nuestro catálogo. Conocé sus diferenciales técnicos y comerciales frente a soluciones tradicionales, a partir de información disponible y resultados documentados.</p></div>

        <div className="mx-materials">{opciones.map(o => <article key={o.id} className={`mx-material mx-${o.tono}`}><div className="mx-material-number">{o.id === 'reciclado' ? '01' : o.id === 'madera' ? '02' : o.id === 'acero' ? '03' : '04'}</div><h3>{o.nombre}</h3><small>{o.subtitulo}</small><div className="mx-material-line"/><h4>Su fortaleza</h4><p>{o.ventaja}</p><h4>Consideraciones técnicas</h4><p>{o.limite}</p></article>)}</div>

        <div className="mx-comparison-heading"><div><span className="mx-overline">DIFERENCIALES PARA TU PROYECTO</span><h3>Diferenciales con valor para tu proyecto</h3></div><p>Cada criterio explica el beneficio práctico y las condiciones para comparar alternativas equivalentes.</p></div>

        <div className="mx-criteria">{criterios.map((c, index) => <details key={c.nombre} className="mx-criterion"><summary><span className="mx-index">{String(index + 1).padStart(2,'0')}</span><span className="mx-criterion-name">{c.nombre}<small>{c.lectura}</small></span><span className="mx-outcome">{c.destacado}<small>{c.nivel}</small></span><span className="mx-plus" aria-hidden="true">+</span></summary><div className="mx-criterion-body">{opciones.map(o => <div key={o.id} className="mx-criterion-cell"><strong>{o.nombre}</strong><p>{c.detalles[o.id]}</p></div>)}</div></details>)}</div>

        <div className="mx-evidence-note"><strong>Cómo leer este análisis</strong><p>Las alternativas tradicionales se muestran únicamente como referencias para explicar las ventajas potenciales de MAPLASTO; no las ofrecemos. Para comparar resistencia, vida útil y costo total hacen falta modelos equivalentes, ensayos completos y condiciones de uso homogéneas.</p></div>

      </section>



      <section id="documentacion" className="mx-section mx-shell"><div className="mx-section-top"><span className="mx-overline">06 / DOCUMENTACIÓN TÉCNICA</span></div><div className="mx-title-row"><h2>Ensayos disponibles. <span>Información para decidir.</span></h2><p>Accedé a los resultados disponibles y conocé las condiciones necesarias para evaluar la MN 111 en una aplicación específica.</p></div>

        <div className="mx-evidence-grid"><article className="mx-evidence"><span className="mx-evidence-tag">INFORME INTI DISPONIBLE</span><h3>Flexión, torsión y agua</h3><p>OT 216-8269: cinco ensayos de flexión, cinco inspecciones de torsión y tres mediciones de absorción tras 24 h. Acceso al informe completo.</p></article><article className="mx-evidence"><span className="mx-evidence-tag amber">INFORME UNC PENDIENTE</span><h3>Comportamiento dieléctrico</h3><p>Ensayo bajo lluvia y perforación en dos probetas, con más de 63 kV sin perforación, según lo comunicado por MAPLASTO. Falta informe del laboratorio.</p></article><article className="mx-evidence"><span className="mx-evidence-tag grey">EVALUACIÓN POR PROYECTO</span><h3>Aptitud para servicio</h3><p>Homologación, cargas de proyecto, fluencia prolongada, envejecimiento UV, trazabilidad, clasificación de fuego y condiciones de aceptación.</p></article></div>

        <div className="mx-disclaimer"><span>!</span><p><strong>Situación de homologación:</strong> no hay homologación nacional acreditada con la documentación proporcionada.</p></div>

        <div className="mx-sources"><strong>Documentación técnica y comercial</strong><div><a href="/maplasto/informe-inti-ot-216-8269.pdf" target="_blank" rel="noopener noreferrer">INTI · Informe OT 216-8269 ↗</a><a

  href="/maplasto/presentacion-empresas-2026.pdf"

  download="MAPLASTO_MN111_Presentacion_Comercial.pdf"

>

  Descargar presentación comercial ↗

</a></div><p>Para un análisis técnico, consultá el informe íntegro del INTI. Los datos eléctricos de la UNC se atribuyen al fabricante hasta disponer del documento del laboratorio.</p></div>

      </section>

      <section className="mx-cta"><div className="mx-shell mx-cta-inner"><div><span className="mx-overline">HABLEMOS DE TU PROYECTO</span><h2>¿Puede funcionar para<br/>tu aplicación?</h2><p>Conversemos sobre la aplicación, la evaluación técnica y una cotización adaptada a las necesidades de tu proyecto.</p></div><Link href="/contacto" className="mx-button mx-button-green">Solicitar evaluación <span>↗</span></Link></div></section>

      <style>{styles}</style>

    </main>

  );

}

const styles = `

.mx-tests{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px;margin:26px 0}.mx-test{background:#f1f6f4;border:1px solid #d9e6df;border-top:4px solid #22a869;border-radius:8px;padding:25px}.mx-test small{font-size:11px;letter-spacing:.09em;color:#56736b;font-weight:800}.mx-test>strong{display:block;font-size:clamp(34px,4vw,53px);letter-spacing:-.05em;margin:15px 0}.mx-test strong em{font-style:normal;font-size:21px}.mx-test p{color:#52665e;font-size:13px}.mx-unc{background:#13272b;color:white;border-radius:10px;padding:35px;display:flex;align-items:center;justify-content:space-between;gap:25px}.mx-unc-tag{font-size:11px;font-weight:800;letter-spacing:.09em;color:#75db9c}.mx-unc h3{font-size:clamp(23px,3vw,34px);max-width:690px;margin:18px 0}.mx-unc p{max-width:780px;color:#d5e2df;font-size:13px}.mx-unc-value{font-weight:800;font-size:60px;white-space:nowrap;color:#68e49f}.mx-unc-value small{font-size:23px}@media(max-width:750px){.mx-tests{grid-template-columns:1fr}.mx-unc{display:block;padding:23px}.mx-unc-value{display:block;font-size:42px;margin-top:15px}}

.mx-page{color:#17272a;background:#fff;overflow:hidden}.mx-page *{box-sizing:border-box}.mx-page p{line-height:1.65}.mx-shell{width:min(1220px,calc(100% - 64px));margin-inline:auto}.mx-section{padding-block:100px;scroll-margin-top:65px}.mx-overline,.mx-kicker{font-size:11px;letter-spacing:.17em;font-weight:800;color:#11804d}.mx-section-top{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:31px}.mx-context{font-size:12px;color:#6d7e80}.mx-section h2,.mx-cta h2{font-size:clamp(36px,4.5vw,64px);letter-spacing:-.055em;line-height:1.1;margin:0 0 25px;font-weight:760}.mx-section h2 span{color:#819092}.mx-intro{font-size:17px;color:#56686b;max-width:570px}.mx-title-row{display:grid;grid-template-columns:1.1fr .6fr;align-items:end;gap:35px;margin-bottom:35px}.mx-title-row h2{margin:0}.mx-title-row>p{margin:0;color:#617175;font-size:15px}.mx-hero{position:relative;min-height:640px;display:flex;align-items:center;color:#fff;background:#0e1e23;isolation:isolate}.mx-hero-photo{object-fit:cover;object-position:center 52%;z-index:-2}.mx-hero-gradient{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,19,23,.97) 0%,rgba(8,19,23,.89) 36%,rgba(8,19,23,.4) 70%,rgba(8,19,23,.08) 100%);z-index:-1}.mx-hero-content{padding-block:80px}.mx-kicker{color:#69e6a0;display:flex;align-items:center;gap:9px}.mx-dot{background:#35c46c;width:8px;height:8px;border-radius:50%;display:inline-block}.mx-hero h1{font-size:clamp(45px,6.1vw,86px);line-height:1.02;letter-spacing:-.057em;max-width:900px;margin:29px 0}.mx-hero h1 em{font-style:normal;color:#54d68a}.mx-hero p{color:#dce6e7;max-width:565px;font-size:17px}.mx-actions{display:flex;align-items:center;gap:13px;flex-wrap:wrap;margin-top:30px}.mx-button{display:inline-flex;align-items:center;justify-content:space-between;gap:30px;padding:15px 20px;border-radius:7px;text-decoration:none!important;font-weight:760;font-size:13px;min-height:49px;transition:transform .2s,background .2s}.mx-button:hover{transform:translateY(-2px)}.mx-button-green{background:#35c46c;color:#10241a!important}.mx-button-dark{background:#17272a;color:#fff!important}.mx-button-outline{border:1px solid #abc0bd;color:#fff!important;background:rgba(12,29,32,.36)}.mx-hero-caption{margin-top:72px;color:#b5c4c4;font-size:11px}.mx-sticky{position:sticky;top:0;z-index:20;background:#fff;border-bottom:1px solid #e6ebeb}.mx-sticky-inner{display:flex;align-items:center;gap:32px;overflow-x:auto;white-space:nowrap;scrollbar-width:none}.mx-sticky a{padding:17px 0;color:#526366;font-size:13px;text-decoration:none;font-weight:700}.mx-sticky a:hover{color:#128253}.mx-product-grid{display:grid;grid-template-columns:1fr .94fr;gap:60px;align-items:center}.mx-product-grid h2 span{color:#168452}.mx-spec-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid #e2e8e8;border-left:1px solid #e2e8e8;margin-top:30px}.mx-spec{padding:19px 15px;border-bottom:1px solid #e2e8e8;border-right:1px solid #e2e8e8;min-height:98px}.mx-spec small{display:block;color:#6b797c;font-size:11px;margin-bottom:10px}.mx-spec strong{font-size:clamp(13px,1.5vw,19px);line-height:1.25}.mx-footnote{font-size:12px;color:#718084;margin-top:20px}.mx-text-link{font-size:13px;font-weight:750;color:#136d45;text-decoration:underline}.mx-product-visual{border:1px solid #dce4e4;border-radius:11px;padding:20px;background:#f2f5f5}.mx-product-visual img{width:100%;height:auto;display:block;border-radius:4px}.mx-product-visual-bottom{display:flex;justify-content:space-between;gap:10px;font-size:12px;margin:19px 0}.mx-product-visual-bottom span{color:#708084}.mx-product-visual>p{font-size:12px;color:#6e7d80;border-top:1px solid #d7dede;padding-top:12px}.mx-band{background:#f3f6f5}.mx-gallery{display:grid;grid-template-columns:1.3fr 1fr;grid-template-rows:repeat(2,minmax(245px,1fr));gap:18px}.mx-gallery figure{margin:0;background:#fff;border:1px solid #e0e7e5;overflow:hidden;border-radius:10px}.mx-gallery-featured{grid-row:span 2}.mx-gallery-photo{height:240px;position:relative;background:#dfe6e5}.mx-gallery-featured .mx-gallery-photo{height:calc(100% - 70px);min-height:475px}.mx-gallery-photo img{object-fit:cover}.mx-gallery figcaption{padding:14px 17px;display:flex;justify-content:space-between;gap:12px;align-items:center}.mx-gallery figcaption strong{font-size:13px}.mx-gallery figcaption span{font-size:11px;color:#6d7c7c}.mx-materials{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:30px}.mx-material{background:#f6f8f7;border:1px solid #e2e7e7;border-radius:10px;padding:23px;min-height:325px;border-top:4px solid #138756}.mx-material.mx-brown{border-top-color:#ad8867}.mx-material.mx-blue{border-top-color:#547c9a}.mx-material.mx-violet{border-top-color:#9686b9}.mx-material-number{font-size:11px;color:#889594;font-weight:800}.mx-material h3{font-size:22px;letter-spacing:-.035em;line-height:1.15;margin:30px 0 5px}.mx-material small{font-size:12px;color:#798785}.mx-material-line{height:1px;background:#dce3e1;margin:23px 0 15px}.mx-material h4{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#16744c;margin:15px 0 5px}.mx-material p{font-size:13px;line-height:1.5;color:#536366;margin:0}.mx-comparison-heading{display:flex;justify-content:space-between;gap:28px;align-items:end;margin-top:85px;margin-bottom:20px}.mx-comparison-heading h3{font-size:28px;margin:11px 0 0;letter-spacing:-.04em}.mx-comparison-heading>p{max-width:310px;font-size:13px;color:#728083}.mx-criterion{border-bottom:1px solid #dce4e3}.mx-criterion:first-child{border-top:1px solid #dce4e3}.mx-criterion summary{cursor:pointer;list-style:none;display:grid;grid-template-columns:45px 1fr 245px 24px;gap:18px;align-items:center;padding:22px 7px}.mx-criterion summary::-webkit-details-marker{display:none}.mx-index{font-size:12px;font-weight:800;color:#91a2a1}.mx-criterion-name{font-weight:780;font-size:17px;line-height:1.4}.mx-criterion-name small{font-size:12px;font-weight:450;color:#6c7c7c;display:block;margin-top:5px}.mx-outcome{font-size:13px;color:#126f46;font-weight:800}.mx-outcome small{font-size:11px;display:block;font-weight:450;color:#8b9695;margin-top:6px}.mx-plus{font-size:25px;color:#228d5c;transition:transform .2s}.mx-criterion[open] .mx-plus{transform:rotate(45deg)}.mx-criterion-body{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:13px;padding:4px 7px 22px 70px}.mx-criterion-cell{padding:16px;background:#f3f6f5;border-radius:6px}.mx-criterion-cell strong{font-size:13px}.mx-criterion-cell p{font-size:12px;color:#627173;line-height:1.5;margin:9px 0 0}.mx-evidence-note{background:#edf7f0;border-left:3px solid #36b76c;padding:20px 24px;margin-top:30px}.mx-evidence-note p{font-size:13px;color:#536a5b;margin:7px 0 0}.mx-price-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.mx-price{border:1px solid #dbe4e2;background:#fff;border-radius:9px;padding:23px;min-height:275px;display:flex;flex-direction:column}.mx-price-top{display:flex;justify-content:space-between;color:#778888;font-size:11px;font-weight:750}.mx-price-mark{font-size:19px;color:#0e8550}.mx-price h3{font-size:20px;line-height:1.22;letter-spacing:-.03em;margin:33px 0 10px}.mx-price-size{color:#7a8889;font-size:12px;margin:0 0 26px}.mx-price>strong{font-size:18px;letter-spacing:-.02em}.mx-price-status{margin:auto 0 0;color:#708281;font-size:11px;padding-top:25px}.mx-pricing-bottom{padding:27px 0;display:flex;justify-content:space-between;align-items:center;gap:30px;border-bottom:1px solid #dfe7e5;margin-top:20px}.mx-pricing-bottom>div{max-width:680px}.mx-pricing-bottom p{font-size:13px;color:#617471;margin:8px 0 0}.mx-evidence-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.mx-evidence{border:1px solid #e0e7e6;border-radius:9px;padding:26px;min-height:245px}.mx-evidence-tag{font-size:10px;font-weight:850;letter-spacing:.06em;color:#137b4b;background:#e7f6e9;padding:7px 9px;border-radius:4px}.mx-evidence-tag.amber{color:#8a600e;background:#fff4d8}.mx-evidence-tag.grey{background:#eef1f1;color:#637174}.mx-evidence h3{margin:29px 0 13px;font-size:19px}.mx-evidence p{font-size:13px;color:#617173;margin:0}.mx-disclaimer{display:flex;gap:18px;align-items:start;padding:21px;background:#fbf6e9;border:1px solid #f0e2bd;border-radius:8px;margin-top:22px}.mx-disclaimer>span{font-size:22px;color:#9b6d1b}.mx-disclaimer p{margin:0;color:#5d5540;font-size:13px}.mx-sources{padding-top:45px}.mx-sources>strong{font-size:16px}.mx-sources>div{display:flex;flex-wrap:wrap;gap:13px;margin:18px 0}.mx-sources a{display:inline-block;padding:12px 15px;border:1px solid #cbdad7;border-radius:6px;color:#156b45;font-size:12px;font-weight:750;text-decoration:none}.mx-sources p{font-size:12px;color:#748181}.mx-cta{background:#112329;color:#fff;padding:80px 0}.mx-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:28px}.mx-cta h2{margin:15px 0}.mx-cta p{max-width:520px;color:#bfd1d0;font-size:14px}.mx-cta .mx-overline{color:#66dda0}

@media(max-width:1050px){.mx-materials,.mx-price-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.mx-product-grid{gap:30px}.mx-spec-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.mx-criterion-body{grid-template-columns:repeat(2,minmax(0,1fr))}.mx-evidence-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}

@media(max-width:700px){.mx-shell{width:min(100% - 36px,1220px)}.mx-section{padding-block:58px}.mx-hero{min-height:640px;align-items:end}.mx-hero-photo{object-position:60% center}.mx-hero-gradient{background:linear-gradient(0deg,rgba(8,19,23,.97),rgba(8,19,23,.80) 55%,rgba(8,19,23,.27))}.mx-hero-content{padding-block:80px 43px}.mx-hero h1{font-size:clamp(42px,10vw,62px);margin:22px 0}.mx-hero p{font-size:14px}.mx-hero-caption{margin-top:42px}.mx-sticky-inner{gap:22px}.mx-sticky a{font-size:12px}.mx-section h2,.mx-cta h2{font-size:clamp(34px,9vw,45px)}.mx-title-row,.mx-product-grid{grid-template-columns:1fr}.mx-title-row{gap:10px}.mx-title-row>p{font-size:14px}.mx-product-visual{order:-1}.mx-gallery{grid-template-columns:1fr;grid-template-rows:auto}.mx-gallery-featured{grid-row:auto}.mx-gallery-featured .mx-gallery-photo,.mx-gallery-photo{height:230px;min-height:0}.mx-gallery figcaption{display:block}.mx-gallery figcaption span{display:block;margin-top:5px}.mx-materials,.mx-price-grid,.mx-evidence-grid{grid-template-columns:1fr}.mx-material{min-height:0}.mx-criterion summary{grid-template-columns:26px 1fr 19px;gap:12px;padding:20px 0}.mx-outcome{grid-column:2;grid-row:2}.mx-plus{grid-column:3;grid-row:1}.mx-criterion-body{grid-template-columns:1fr;padding:0 0 20px}.mx-comparison-heading,.mx-pricing-bottom,.mx-cta-inner{display:block}.mx-pricing-bottom .mx-button{margin-top:25px}.mx-cta .mx-button{margin-top:20px}.mx-spec-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}

@media(prefers-reduced-motion:reduce){.mx-page *{scroll-behavior:auto!important;transition:none!important}}

/* ECONOMÍA CIRCULAR */

.mx-circular {

  background: #122327;

  color: #fff;

  padding: 100px 0;

}

.mx-circular-heading {

  max-width: 850px;

}

.mx-circular .mx-overline {

  color: #63df98;

}

.mx-circular h2 {

  font-size: clamp(38px, 5vw, 66px);

  letter-spacing: -0.055em;

  line-height: 1.1;

  margin: 24px 0;

}

.mx-circular h2 span {

  color: #63df98;

}

.mx-circular-heading p {

  max-width: 730px;

  color: #bdcecd;

  font-size: 16px;

  line-height: 1.75;

}

.mx-circular-steps {

  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 16px;

  margin-top: 55px;

}

.mx-circular-step {

  background: #203337;

  border: 1px solid #344b4c;

  border-top: 3px solid #35c46c;

  border-radius: 9px;

  padding: 28px;

}

.mx-circular-step > span {

  color: #63df98;

  font-size: 13px;

  font-weight: 800;

}

.mx-circular-step h3 {

  margin: 28px 0 12px;

  color: #fff;

  font-size: 24px;

}

.mx-circular-step p {

  color: #bdcecd;

  font-size: 14px;

  line-height: 1.65;

}

.mx-circular-footer {

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 35px;

  margin-top: 35px;

  padding-top: 30px;

  border-top: 1px solid #344b4c;

}

.mx-circular-footer > div {

  max-width: 650px;

}

.mx-circular-footer strong {

  color: #fff;

  font-size: 18px;

}

.mx-circular-footer p {

  color: #b7c8c7;

  font-size: 13px;

  line-height: 1.65;

}

@media (max-width: 750px) {

  .mx-circular {

    padding: 65px 0;

  }

  .mx-circular-steps {

    grid-template-columns: 1fr;

    margin-top: 35px;

  }

  .mx-circular-footer {

    flex-direction: column;

    align-items: flex-start;

  }

}


/* Ajustes mobile y tablet: accesibilidad tactil y legibilidad */
.mx-page{overflow-x:clip}
.mx-page img{max-width:100%}
.mx-page a,.mx-page summary{touch-action:manipulation}
.mx-page :focus-visible{outline:3px solid #35c46c;outline-offset:3px}
.mx-page section[id]{scroll-margin-top:76px}
@media(max-width:900px){
  .mx-shell{width:calc(100% - 44px)}
  .mx-hero{min-height:590px}
  .mx-section{padding-block:72px}
  .mx-product-grid{grid-template-columns:1fr;gap:32px}
  .mx-product-visual{max-width:100%}
  .mx-title-row{grid-template-columns:1fr;gap:14px}
  .mx-materials,.mx-price-grid,.mx-evidence-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .mx-criterion summary{grid-template-columns:35px minmax(0,1fr) 170px 24px}
  .mx-criterion-body{padding-left:0}
  .mx-cta-inner{align-items:flex-start}
}
@media(max-width:600px){
  .mx-shell{width:calc(100% - 32px)}
  .mx-hero{min-height:min(740px,100svh);min-height:620px}
  .mx-hero-content{padding:104px 0 44px}
  .mx-hero h1{font-size:clamp(37px,10.4vw,52px);overflow-wrap:break-word}
  .mx-hero p{font-size:15px;line-height:1.65}
  .mx-hero-caption{margin-top:30px;line-height:1.5}
  .mx-actions{display:grid;grid-template-columns:1fr;gap:10px;align-items:stretch}
  .mx-actions .mx-button,.mx-actions .mx-text-link{width:100%;justify-content:space-between}
  .mx-actions .mx-text-link{padding:12px 2px}
  .mx-button{min-height:48px;padding:13px 16px;white-space:normal}
  .mx-sticky-inner{gap:22px;scroll-snap-type:x proximity;padding-inline:2px}
  .mx-sticky a{min-height:46px;display:flex;align-items:center;scroll-snap-align:start;flex-shrink:0}
  .mx-section{padding-block:56px}
  .mx-section-top{display:block;margin-bottom:22px}
  .mx-context{display:block;margin-top:9px}
  .mx-section h2,.mx-cta h2{font-size:clamp(32px,9vw,45px);overflow-wrap:break-word}
  .mx-product-grid{gap:25px}
  .mx-product-visual{padding:12px}
  .mx-product-visual-bottom{align-items:flex-start;flex-direction:column}
  .mx-spec-grid{grid-template-columns:repeat(2,minmax(0,1fr));margin-top:22px}
  .mx-spec{padding:14px 10px;min-height:84px}
  .mx-spec strong{font-size:clamp(13px,3.8vw,17px);overflow-wrap:anywhere}
  .mx-gallery{grid-template-columns:1fr;display:grid;gap:13px}
  .mx-gallery .mx-gallery-photo,.mx-gallery .mx-gallery-featured .mx-gallery-photo{height:auto;min-height:0;aspect-ratio:4/3}
  .mx-gallery figure:first-child .mx-gallery-photo{aspect-ratio:3/4}
  .mx-gallery figcaption{display:block;padding:12px 14px}
  .mx-gallery figcaption span{display:block;margin-top:5px;line-height:1.4}
  .mx-tests{grid-template-columns:1fr}
  .mx-test{padding:21px}
  .mx-unc{padding:22px}
  .mx-unc-value{font-size:42px}
  .mx-materials,.mx-price-grid,.mx-evidence-grid{grid-template-columns:1fr}
  .mx-material{min-height:auto;padding:20px}
  .mx-material h3{margin-top:20px}
  .mx-comparison-heading{margin-top:55px}
  .mx-criterion summary{grid-template-columns:24px minmax(0,1fr) 22px;gap:10px;padding:19px 0}
  .mx-criterion-name{font-size:16px}
  .mx-criterion-name small{font-size:12px;line-height:1.45}
  .mx-outcome{grid-column:2;grid-row:2;overflow-wrap:anywhere}
  .mx-plus{grid-column:3;grid-row:1}
  .mx-criterion-body{grid-template-columns:1fr;padding:0 0 18px}
  .mx-criterion-cell{padding:15px}
  .mx-circular{padding:62px 0}
  .mx-circular h2{font-size:clamp(34px,9vw,46px)}
  .mx-circular-heading p{font-size:15px}
  .mx-circular-steps{margin-top:30px;grid-template-columns:1fr}
  .mx-circular-step{padding:21px}
  .mx-circular-footer{display:block}
  .mx-circular-footer .mx-button{margin-top:20px;width:100%}
  .mx-sources>div{display:grid;grid-template-columns:1fr}
  .mx-sources a{min-height:46px;display:flex;align-items:center}
  .mx-cta{padding:55px 0}
  .mx-cta-inner{display:block}
  .mx-cta .mx-button{width:100%;margin-top:22px}
}
@media(max-width:380px){
  .mx-shell{width:calc(100% - 26px)}
  .mx-hero h1{font-size:36px}
  .mx-kicker{letter-spacing:.08em;font-size:10px}
  .mx-spec{padding:12px 9px}
  .mx-spec strong{font-size:13px}
}
`;
