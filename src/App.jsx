import KpiCard from "./components/KpiCard";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">KPI Dashboard</h1>

          <p className="mt-2 text-gray-600">
            Indicadores principais utilizando componentes reutilizáveis.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <KpiCard
            title="Receita total"
            value="R$ 24.580"
            trend="+12,5%"
            trendType="positive"
            description="Comparado ao mês anterior"
          />

          <KpiCard
            title="Novos clientes"
            value="1.248"
            trend="+8,2%"
            trendType="positive"
            description="Novos clientes neste mês"
          />

          <KpiCard
            title="Taxa de conversão"
            value="4,8%"
            trend="-2,1%"
            trendType="negative"
            description="Comparado ao mês anterior"
          />
        </section>
      </div>
    </main>
  );
}

export default App;
