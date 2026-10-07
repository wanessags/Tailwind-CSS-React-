import Button from "./components/Button";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Button System</h1>

        <p className="mb-8 text-gray-600">
          Sistema de botões reutilizáveis utilizando React e Tailwind CSS.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button>Salvar</Button>

          <Button variant="secondary">Cancelar</Button>

          <Button variant="danger">Excluir</Button>
        </div>
      </div>
    </main>
  );
}

export default App;
