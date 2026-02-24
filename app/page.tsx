export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="px-6 py-20 text-center bg-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold">
          Torneo de Pádel 2025
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          12–14 Julio · Club Deportivo Valencia
        </p>

        <div className="mt-8">
          <a
            href="/inscripcion"
            className="px-8 py-4 bg-black text-white rounded-xl text-lg hover:opacity-80 transition"
          >
            Inscribirme ahora
          </a>
        </div>
      </section>

      {/* INFO */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          Categorías
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-xl">Masculino B</h3>
            <p className="mt-2 text-gray-600">25€ por pareja</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-xl">Femenino B</h3>
            <p className="mt-2 text-gray-600">25€ por pareja</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold text-xl">Mixto C</h3>
            <p className="mt-2 text-gray-600">25€ por pareja</p>
          </div>
        </div>
      </section>
    </main>
  );
}