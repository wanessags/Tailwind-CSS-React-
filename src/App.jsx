import Navbar from "./components/Navbar";
import KpiCard from "./components/KpiCard";
import Badge from "./components/Badge";
import Alert from "./components/Alert";

const navigationLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Indicadores", href: "#indicadores" },
  { label: "Projetos", href: "#projetos" },
  { label: "Atividades", href: "#atividades" },
];

const indicators = [
  {
    id: 1,
    title: "Receita total",
    value: "R$ 24.580",
    trend: "+12,5%",
    trendType: "positive",
    description: "Comparado ao mês anterior",
  },
  {
    id: 2,
    title: "Clientes ativos",
    value: "1.248",
    trend: "+8,2%",
    trendType: "positive",
    description: "Clientes cadastrados",
  },
  {
    id: 3,
    title: "Projetos concluídos",
    value: "86",
    trend: "+15,3%",
    trendType: "positive",
    description: "Projetos finalizados neste mês",
  },
  {
    id: 4,
    title: "Pendências",
    value: "12",
    trend: "-4,1%",
    trendType: "negative",
    description: "Pendências em aberto",
  },
];

const projects = [
  {
    id: 1,
    name: "Website institucional",
    client: "Empresa Alpha",
    progress: 85,
    status: "Em andamento",
    variant: "info",
  },
  {
    id: 2,
    name: "Aplicativo mobile",
    client: "Empresa Beta",
    progress: 60,
    status: "Em andamento",
    variant: "info",
  },
  {
    id: 3,
    name: "Dashboard financeiro",
    client: "Empresa Gamma",
    progress: 100,
    status: "Concluído",
    variant: "success",
  },
  {
    id: 4,
    name: "Sistema de cadastro",
    client: "Empresa Delta",
    progress: 30,
    status: "Pendente",
    variant: "warning",
  },
];

const activities = [
  {
    id: 1,
    title: "Novo cliente cadastrado",
    description: "Empresa Alpha",
    time: "Há 10 minutos",
  },
  {
    id: 2,
    title: "Projeto atualizado",
    description: "Aplicativo mobile",
    time: "Há 35 minutos",
  },
  {
    id: 3,
    title: "Pagamento recebido",
    description: "R$ 2.500,00",
    time: "Há 2 horas",
  },
  {
    id: 4,
    title: "Projeto concluído",
    description: "Dashboard financeiro",
    time: "Ontem",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar brand="Dashboard" links={navigationLinks} />

      <main id="inicio" className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Painel administrativo
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Visão geral
            </h1>

            <p className="mt-2 text-gray-500">
              Acompanhe os indicadores e as atividades do seu negócio.
            </p>
          </div>

          <div className="self-start rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600">
            Dados demonstrativos
          </div>
        </header>

        <section className="mb-8">
          <Alert title="Bem-vindo ao painel!" variant="info">
            Confira os indicadores, os projetos em andamento e as atividades
            mais recentes.
          </Alert>
        </section>

        <section id="indicadores" className="mb-10">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-900">
              Indicadores principais
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Resumo do desempenho mensal.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {indicators.map((indicator) => (
              <KpiCard
                key={indicator.id}
                title={indicator.title}
                value={indicator.value}
                trend={indicator.trend}
                trendType={indicator.trendType}
                description={indicator.description}
              />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <section id="projetos" className="lg:col-span-2">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-gray-900">
                Projetos recentes
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Acompanhe o andamento dos projetos.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="divide-y divide-gray-100">
                {projects.map((project) => (
                  <article key={project.id} className="p-5 md:p-6">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {project.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {project.client}
                        </p>
                      </div>

                      <div className="self-start">
                        <Badge variant={project.variant}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-gray-500">Progresso</span>

                        <span className="font-semibold text-gray-700">
                          {project.progress}%
                        </span>
                      </div>

                      <div
                        className="h-2 overflow-hidden rounded-full bg-gray-100"
                        role="progressbar"
                        aria-label={`Progresso de ${project.name}`}
                        aria-valuenow={project.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="h-full rounded-full bg-blue-600"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="atividades">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-gray-900">
                Atividades recentes
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Últimas movimentações do sistema.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="space-y-6">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-blue-500" />

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {activity.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-600">
                        {activity.description}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-12 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          Mini Dashboard — React + Tailwind CSS
        </footer>
      </main>
    </div>
  );
}

export default App;
