# Plataforma comercial industrial — MVP AOG Patagonia 2026

## Ejecutar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrir http://localhost:3000. Para publicar en Vercel, importar este repositorio, configurar `NEXT_PUBLIC_CONTACT_EMAIL` y desplegar con el framework Next.js. La URL del QR debe ser `https://TU-DOMINIO/aog2026`; verificar el enlace en iOS y Android antes de imprimir. No se genera QR definitivo sin dominio permanente.

## Estado del MVP

- Rutas responsivas, navegación, metadatos y contenido estructurado.
- Tabla comparativa cualitativa sin precios falsos.
- Formulario que **solo abre el cliente de correo** (no envía ni persiste). Falta correo público.
- No se incluye logo, plano ni fotografías de MAPLASTO: el PDF referido en el brief no fue adjuntado a esta entrega.
- No se incorporaron cotizaciones públicas actuales ni enlaces técnicos verificados. La investigación documental y el comparador de precios siguen pendientes.
- No se ha ejecutado compilación ni pruebas automatizadas en este entorno.

## Pendientes previos a publicación

1. Incorporar PDF original de MAPLASTO y autorización para usar fotografías, logo y plano MN 111.
2. Confirmar masa, capacidad de producción, formulación, ensayos UNC y homologaciones.
3. Solicitar informes de 62 kV y 3 % con método, muestra, laboratorio, fecha y resultado.
4. Obtener precios públicos comparables con fecha, proveedor, IVA, dimensiones y condiciones.
5. Completar nombre, cargo, correo, WhatsApp, LinkedIn, marca y aviso de privacidad.
6. Para captura directa de leads, crear API con validación en servidor, rate limiting, antispam, almacenamiento seguro y consentimiento trazable.
7. Ejecutar `npm run build`, auditoría Lighthouse, pruebas de teclado y móviles.
8. Confirmar dominio, configurar HTTPS, Open Graph con imagen real y generar/probar QR.

## Precauciones

No publicar precios de compra internos, comisiones, supuestas homologaciones ni ventajas estructurales sin evidencia. Las soluciones no confirmadas se presentan como conceptos, no productos fabricados.


## Actualización MAPLASTO — 12/10/2026
- `/crucetas` incluye fotografías y plano recortados de las páginas 3, 4 y 5 del PDF aportado; el PDF original se encuentra en `public/maplasto/presentacion-maplasto.pdf`.
- Selector interactivo de comparación de 4 familias con 15 propiedades y vista de precios con enlaces a publicación pública Luzin.
- Referencias de precios: Luzin madera curupay MN111 (90×115×2440) ARS 61.686,75 y acero UPN 12×1820 ARS 250.375,60; consulta 2026-10-12. Son productos NO equivalentes en dimensiones/diseño; verificar precios, IVA y stock antes de ofertar.
- El PDF indica ≤3% de absorción, pero no aporta el informe completo. El dato eléctrico de 62kV es comunicación verbal. Nunca presentarlos como certificados.
- Pendiente: homologaciones, ensayos completos, confirmación de contacto, verificación de publicación y condiciones de precios, pruebas npm build.
