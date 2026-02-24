import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07110c] text-white">
      {/* HERO con imagen del cartel + overlay */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Imagen de fondo (tu cartel) */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/cartel.jpg')" }}
          />
          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#07110c]/95" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex flex-col gap-10">
            <div className="inline-flex items-center gap-3">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide">
                OXYGEN SPORTS CLUB · 21/02
              </span>
              <span className="rounded-full border border-[#d8c69a]/30 bg-[#d8c69a]/10 px-3 py-1 text-xs tracking-wide text-[#e9dcb8]">
                GOLDEN MATCH SOCIAL CLUB
              </span>
            </div>

            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Golden Match <span className="text-[#e9dcb8]">Pádel</span> Tournament
              </h1>
              <p className="mt-4 text-base text-white/80 md:text-lg">
                Mínimo 3 partidos de 30&apos; · Premios, sorteos y welcome pack premium.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/inscripcion"
                  className="rounded-xl bg-[#e9dcb8] px-6 py-3 font-semibold text-[#08120c] hover:opacity-90"
                >
                  Inscribirme ahora
                </Link>
                <a
                  href="#info"
                  className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10"
                >
                  Ver info
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <InfoPill title="Formato" value="3×30' mínimo" />
                <InfoPill title="Premios" value="+3500€ en valor" />
                <InfoPill title="Ambiente" value="DJ · Retos · Stands" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section id="info" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <Card title="Categorías" accent>
            <ul className="space-y-2 text-white/80">
              <li>Masculino: Elite / A / B / C</li>
              <li>Femenino: B / C</li>
              <li>Mixto: B / C</li>
            </ul>
          </Card>

          <Card title="Precios">
            <div className="space-y-3 text-white/80">
              <PriceLine label="Cat. Elite" value="40€" />
              <PriceLine label="Cat. A, B y C" value="30€" />
            </div>
            <p className="mt-4 text-sm text-white/60">
              Pago seguro con tarjeta (Stripe). Confirmación inmediata.
            </p>
          </Card>

          <Card title="Welcome Pack Premium">
            <ul className="space-y-2 text-white/80">
              <li>Fruta y agua</li>
              <li>Grip pádel</li>
              <li>Ticket + sorteos</li>
              <li>Cheesecake individual</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Card title="Premios y sorteos" accent>
            <p className="text-white/80">
              Premios y sorteos valorados en <span className="text-[#e9dcb8] font-semibold">+3500€</span>.
            </p>
            <p className="mt-3 text-white/70">
              Camiseta Golden Match x Black Crown para campeones y subcampeones.
            </p>
          </Card>

          <Card title="Inscripción rápida">
            <p className="text-white/80">
              Registra tu pareja en 1 minuto y paga online para asegurar plaza.
            </p>
            <Link
              href="/inscripcion"
              className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-[#08120c] hover:opacity-90"
            >
              Ir a inscripción
            </Link>
            <p className="mt-3 text-xs text-white/60">
              *Plazas limitadas por categoría.
            </p>
          </Card>
        </div>

        {/* QR opcional (si quieres ponerlo) */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70">
            Si ya tienes un enlace de inscripción (el del QR del cartel), lo puedes poner aquí como botón.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/inscripcion"
              className="rounded-xl bg-[#e9dcb8] px-5 py-3 font-semibold text-[#08120c]"
            >
              Inscribirme
            </Link>
            <a
              className="rounded-xl border border-white/15 bg-transparent px-5 py-3 font-semibold text-white/90 hover:bg-white/10"
              href="#"
            >
              Contacto (WhatsApp)
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Golden Match · Oxygen Sports Club</p>
            <p>Política de privacidad · Cookies · Aviso legal</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function InfoPill({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-white/60">{title}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

function Card({
  title,
  children,
  accent,
}: {
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        {accent ? (
          <span className="rounded-full border border-[#d8c69a]/30 bg-[#d8c69a]/10 px-3 py-1 text-xs text-[#e9dcb8]">
            Premium
          </span>
        ) : null}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function PriceLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
      <span className="text-white/80">{label}</span>
      <span className="font-semibold text-[#e9dcb8]">{value}</span>
    </div>
  );
}