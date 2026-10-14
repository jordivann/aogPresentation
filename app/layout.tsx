import type {Metadata} from 'next';import './globals.css';import {Header,Footer} from '../components/Site';
export const metadata:Metadata={title:{default:'Soluciones industriales | AOG Patagonia 2026',template:'%s | Soluciones industriales'},description:'Infraestructura eléctrica, materiales reciclados y desarrollo de soluciones industriales a medida.',robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><Header/><main>{children}</main><Footer/></body></html>}
