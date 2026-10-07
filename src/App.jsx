import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile Card</h1>

          <p className="mt-2 text-gray-600">
            Card de perfil reutilizável com React e Tailwind CSS.
          </p>
        </header>

        <section className="flex flex-col gap-6 md:flex-row">
          <ProfileCard
            name="Wanessa"
            role="Desenvolvedora"
            image="https://i.pravatar.cc/150?img=12"
            status="Ativo"
            description="Estudante de Tecnologia e desenvolvimento de aplicações utilizando React, Tailwind CSS e outras tecnologias."
          />

          <ProfileCard
            name="Ana Souza"
            role="Designer"
            image="https://i.pravatar.cc/150?img=32"
            status="Ativo"
            description="Profissional de design focada na criação de interfaces modernas, acessíveis e intuitivas."
          />
        </section>
      </div>
    </main>
  );
}

export default App;
