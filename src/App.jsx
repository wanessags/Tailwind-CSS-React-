import Alert from "./components/Alert";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Alert / Notification
          </h1>

          <p className="mt-2 text-gray-600">
            Componentes de alerta reutilizáveis com React e Tailwind CSS.
          </p>
        </header>

        <section className="space-y-5">
          <Alert title="Operação realizada com sucesso" variant="success">
            Seus dados foram salvos corretamente.
          </Alert>

          <Alert title="Erro ao processar solicitação" variant="error">
            Não foi possível concluir a operação. Tente novamente mais tarde.
          </Alert>

          <Alert title="Atenção" variant="warning">
            Algumas informações precisam ser revisadas antes de continuar.
          </Alert>

          <Alert title="Informação importante" variant="info">
            Uma nova atualização está disponível para o sistema.
          </Alert>
        </section>
      </div>
    </main>
  );
}

export default App;
