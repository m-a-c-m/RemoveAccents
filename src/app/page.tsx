import RemoveAccents from "@/components/RemoveAccents";
import { MdTextFields } from "react-icons/md";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://miguelacm.es/tools/remove-accents";
const EMBED_URL = process.env.NEXT_PUBLIC_EMBED_URL || "https://miguelacm.es/embed/remove-accents";

export const metadata = {
  title: "Eliminar Acentos y Tildes de Texto Gratis Online",
  description:
    "Quita acentos, tildes y diacríticos de cualquier texto al instante mediante normalización Unicode. Opción para conservar la ñ como letra propia del español. Copia el resultado con un clic.",
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Eliminar Acentos y Tildes de Texto Gratis Online",
  url: SITE_URL,
  description:
    "Quita acentos, tildes y diacríticos de cualquier texto al instante mediante normalización Unicode. Opción para conservar la ñ como letra propia del español. Copia el resultado con un clic.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "es-ES",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  author: {
    "@type": "Person",
    name: "Miguel Ángel Colorado Marin",
    url: "https://miguelacm.es",
  },
  featureList: [
    "Normalización Unicode NFD",
    "Opción para conservar la ñ",
    "Procesamiento en tiempo real",
    "Compatible con cualquier idioma con diacríticos",
    "Copiar resultado con un clic",
    "Sin registro",
    "Código abierto",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <MdTextFields className="text-base" />
              Herramienta gratuita · Código abierto
            </div>
            <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
              Eliminar Acentos y Tildes
            </h1>
            <p className="mb-2 text-lg text-text-muted">
              Quita acentos y diacríticos de cualquier texto al instante, conservando la ñ si quieres.
            </p>
            <p className="text-sm text-text-muted/60">
              Hecho por{" "}
              <a
                href="https://miguelacm.es"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-text font-medium hover:opacity-80 transition-opacity"
              >
                MACM
              </a>{" "}
              · Sin registro · Sin anuncios · 100% en el navegador
            </p>
          </div>

          <div className="glass rounded-2xl border border-border/20 p-6 md:p-8">
            <RemoveAccents />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: "🔤",
                title: "Normalización Unicode",
                desc: "Usa la descomposición NFD del propio navegador para separar y eliminar cualquier diacrítico de forma fiable.",
              },
              {
                icon: "Ñ",
                title: "Conserva la ñ",
                desc: "La ñ es una letra propia del español, no un acento — actívalo o desactívalo según lo necesites.",
              },
              {
                icon: "⚡",
                title: "Tiempo real",
                desc: "El resultado sin acentos aparece automáticamente mientras escribes o pegas el texto.",
              },
            ].map((item) => (
              <div
                key={item.icon}
                className="glass rounded-xl border border-border/15 p-5"
              >
                <span className="mb-3 block text-2xl">{item.icon}</span>
                <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border/20 bg-white/3 p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">
              Cómo eliminar acentos de un texto
            </h2>
            <ol className="space-y-3">
              {[
                { n: 1, text: "Pega tu texto en el panel izquierdo." },
                { n: 2, text: "Decide si quieres conservar la ñ activando o desactivando la opción." },
                { n: 3, text: "El resultado sin acentos aparece automáticamente en el panel derecho." },
                { n: 4, text: "Copia el texto normalizado con un clic." },
              ].map((step) => (
                <li key={step.n} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    {step.n}
                  </span>
                  <p className="text-sm text-text-muted leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-semibold text-white">Preguntas frecuentes</h2>
            {[
              {
                q: "¿Para qué sirve eliminar los acentos de un texto?",
                a: "Es habitual al generar slugs para URLs, nombres de archivo, usuarios de sistemas que no soportan Unicode completo, o al preparar datos para sistemas heredados que solo aceptan caracteres ASCII.",
              },
              {
                q: "¿Se pierde la ñ al eliminar los acentos?",
                a: "Por defecto la herramienta conserva la ñ, ya que es una letra propia del alfabeto español y no un acento. Puedes desactivar esta opción si necesitas convertirla también a n.",
              },
              {
                q: "¿Funciona con otros idiomas además del español?",
                a: "Sí, la normalización Unicode NFD elimina cualquier diacrítico (tildes, diéresis, cedillas, circunflejos...) de texto en francés, portugués, alemán, italiano y cualquier otro idioma con caracteres acentuados.",
              },
              {
                q: "¿Es seguro pegar aquí texto con datos sensibles?",
                a: "Sí, todo el procesamiento ocurre en tu navegador mediante la API nativa de normalización de JavaScript. Nada se envía a ningún servidor.",
              },
              {
                q: "¿Afecta a las mayúsculas y minúsculas del texto original?",
                a: "No, la herramienta solo elimina los signos diacríticos; respeta exactamente las mayúsculas y minúsculas del texto original.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-border/20 bg-white/3 p-5"
              >
                <h3 className="mb-2 font-medium text-white">{item.q}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border/20 bg-white/3 p-6">
            <h2 className="mb-2 font-semibold text-white">
              Integra el eliminador de acentos en tu web
            </h2>
            <p className="mb-4 text-sm text-text-muted">
              Puedes embeber esta herramienta en cualquier web con un simple iframe.
            </p>
            <div className="mb-3 rounded-lg bg-black/40 p-3">
              <p className="mb-1 text-xs text-text-muted/60">Iframe (integración directa):</p>
              <code className="text-xs text-green-400 break-all">
                {`<iframe src="${EMBED_URL}" width="100%" height="700" style="border:none;border-radius:12px;" title="Eliminar Acentos y Tildes de Texto Gratis Online — miguelacm.es" loading="lazy"></iframe>`}
              </code>
            </div>
            <div className="rounded-lg bg-black/40 p-3">
              <p className="mb-1 text-xs text-text-muted/60">
                Enlace con atribución (recomendado para backlink):
              </p>
              <code className="text-xs text-green-400 break-all">
                {`<a href="${SITE_URL}" target="_blank" rel="noopener">Eliminador de acentos gratis por MACM</a>`}
              </code>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
