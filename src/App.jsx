import Navbar from "./components/Navbar";

function App() {
  const navigationLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar brand="MeuSite" links={navigationLinks} />

      <main>
        <section
          id="inicio"
          className="flex min-h-[420px] items-center justify-center px-6 py-20"
        >
          <div className="max-w-3xl text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              React + Tailwind CSS
            </span>

            <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Responsive Navbar
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Exemplo de uma barra de navegação responsiva, construída com
              componentes reutilizáveis, Flexbox e Tailwind CSS.
            </p>

            <a
              href="#sobre"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Saiba mais
            </a>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900">Sobre o projeto</h2>

          <p className="mt-3 text-gray-600">
            Este exercício demonstra como criar uma navegação que funciona em
            diferentes tamanhos de tela.
          </p>
        </section>

        <section id="servicos" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900">Serviços</h2>

          <p className="mt-3 text-gray-600">
            Desenvolvimento de interfaces com React e Tailwind CSS.
          </p>
        </section>

        <section id="contato" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900">Contato</h2>

          <p className="mt-3 text-gray-600">Seção demonstrativa de contato.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
