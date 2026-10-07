import Badge from "./components/Badge";
import Avatar from "./components/Avatar";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Badge + Avatar
        </h1>

        <p className="mb-8 text-gray-600">
          Componentes reutilizáveis utilizando React e Tailwind CSS.
        </p>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar
              src="https://i.pravatar.cc/150?img=12"
              alt="Wanessa"
              size="lg"
            />

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Wanessa</h2>

              <p className="text-sm text-gray-500">Desenvolvedora</p>
            </div>

            <Badge variant="success">Ativo</Badge>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
