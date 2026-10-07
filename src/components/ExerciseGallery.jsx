import { useState } from "react";

import MiniDashboard from "../App.jsx";
import Button from "./Button.jsx";
import Badge from "./Badge.jsx";
import Avatar from "./Avatar.jsx";
import ProfileCard from "./ProfileCard.jsx";
import ProductCard from "./ProductCard.jsx";
import LoginForm from "./LoginForm.jsx";
import KpiCard from "./KpiCard.jsx";
import PricingCard from "./PricingCard.jsx";
import Alert from "./Alert.jsx";
import Navbar from "./Navbar.jsx";

const exercises = [
  { id: 1, name: "Button System" },
  { id: 2, name: "Badge + Avatar" },
  { id: 3, name: "Profile Card" },
  { id: 4, name: "Product Card" },
  { id: 5, name: "Login Form" },
  { id: 6, name: "KPI Card" },
  { id: 7, name: "Pricing Card" },
  { id: 8, name: "Alert / Notification" },
  { id: 9, name: "Responsive Navbar" },
  { id: 10, name: "Mini Dashboard" },
];

function ExerciseContent({ selected }) {
  switch (selected) {
    case 1:
      return (
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Salvar</Button>
          <Button variant="secondary">Cancelar</Button>
          <Button variant="danger">Excluir</Button>
        </div>
      );

    case 2:
      return (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <Badge variant="success">Ativo</Badge>
            <Badge variant="warning">Pendente</Badge>
            <Badge variant="danger">Erro</Badge>
            <Badge variant="info">Informação</Badge>
          </div>

          <div className="flex items-center gap-4">
            <Avatar
              src="https://i.pravatar.cc/150?img=12"
              alt="Foto de perfil"
              size="lg"
            />

            <div>
              <h3 className="font-semibold">Wanessa</h3>
              <p className="text-sm text-gray-500">Desenvolvedora</p>
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <ProfileCard
            name="Wanessa"
            role="Desenvolvedora"
            image="https://i.pravatar.cc/150?img=12"
            status="Ativo"
            description="Estudante de tecnologia, desenvolvendo interfaces com React e Tailwind CSS."
          />

          <ProfileCard
            name="Ana Souza"
            role="Designer"
            image="https://i.pravatar.cc/150?img=32"
            status="Ativo"
            description="Profissional focada em interfaces modernas e acessíveis."
          />
        </div>
      );

    case 4:
      return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            name="Fone Bluetooth"
            description="Fone sem fio com bateria de longa duração."
            price="R$ 199,90"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
          />

          <ProductCard
            name="Smartwatch"
            description="Relógio inteligente com monitoramento de atividades."
            price="R$ 349,90"
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
          />

          <ProductCard
            name="Câmera Fotográfica"
            description="Câmera compacta para registrar momentos especiais."
            price="R$ 899,90"
            image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
            status="Novo"
          />
        </div>
      );

    case 5:
      return (
        <div className="flex justify-center">
          <LoginForm />
        </div>
      );

    case 6:
      return (
        <div className="grid gap-6 md:grid-cols-3">
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
        </div>
      );

    case 7:
      return (
        <div className="grid items-stretch gap-8 md:grid-cols-3">
          <PricingCard
            name="Básico"
            price="29,90"
            description="Ideal para começar."
            features={["1 usuário", "5 projetos", "Suporte por e-mail"]}
          />

          <PricingCard
            name="Profissional"
            price="59,90"
            description="Para profissionais."
            features={[
              "5 usuários",
              "Projetos ilimitados",
              "Suporte prioritário",
              "Relatórios avançados",
            ]}
            featured={true}
          />

          <PricingCard
            name="Empresarial"
            price="99,90"
            description="Para equipes."
            features={[
              "Usuários ilimitados",
              "Projetos ilimitados",
              "Suporte 24 horas",
              "Integrações avançadas",
            ]}
          />
        </div>
      );

    case 8:
      return (
        <div className="space-y-5">
          <Alert title="Sucesso" variant="success">
            Seus dados foram salvos corretamente.
          </Alert>

          <Alert title="Erro" variant="error">
            Não foi possível concluir a operação.
          </Alert>

          <Alert title="Atenção" variant="warning">
            Revise as informações antes de continuar.
          </Alert>

          <Alert title="Informação" variant="info">
            Uma atualização está disponível.
          </Alert>
        </div>
      );

    case 9:
      return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <Navbar
            brand="MeuSite"
            links={[
              { label: "Início", href: "#inicio-demo" },
              { label: "Sobre", href: "#sobre-demo" },
              { label: "Serviços", href: "#servicos-demo" },
              { label: "Contato", href: "#contato-demo" },
            ]}
          />

          <div className="space-y-12 p-8">
            <section id="inicio-demo">
              <h3 className="text-2xl font-bold">Bem-vindo ao MeuSite</h3>
              <p className="mt-2 text-gray-600">
                Exemplo de navegação responsiva.
              </p>
            </section>

            <section id="sobre-demo">
              <h3 className="font-semibold">Sobre</h3>
              <p className="text-gray-600">Projeto desenvolvido com React.</p>
            </section>

            <section id="servicos-demo">
              <h3 className="font-semibold">Serviços</h3>
              <p className="text-gray-600">Interfaces com Tailwind CSS.</p>
            </section>

            <section id="contato-demo">
              <h3 className="font-semibold">Contato</h3>
              <p className="text-gray-600">Seção demonstrativa de contato.</p>
            </section>
          </div>
        </div>
      );

    case 10:
      return <MiniDashboard />;

    default:
      return <p>Selecione um exercício.</p>;
  }
}

function ExerciseGallery() {
  const [selected, setSelected] = useState(1);

  const currentExercise = exercises.find(
    (exercise) => exercise.id === selected,
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-sm font-semibold text-blue-600">
            Atividade acadêmica
          </p>

          <h1 className="mt-1 text-2xl font-bold text-gray-900">
            React + Tailwind CSS
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Galeria de componentes e exercícios.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Selecione um exercício
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {exercises.map((exercise) => (
              <button
                key={exercise.id}
                type="button"
                onClick={() => setSelected(exercise.id)}
                aria-pressed={selected === exercise.id}
                className={`rounded-xl border p-4 text-left transition ${
                  selected === exercise.id
                    ? "border-blue-600 bg-blue-600 text-white shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                <span className="block text-xs opacity-75">
                  Exercício {String(exercise.id).padStart(2, "0")}
                </span>

                <span className="mt-2 block text-sm font-semibold">
                  {exercise.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5">
            <p className="text-sm font-medium text-blue-600">
              Exercício {String(selected).padStart(2, "0")}
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              {currentExercise.name}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Demonstração do componente desenvolvido.
            </p>
          </div>

          <div
            key={selected}
            className={`rounded-2xl border border-gray-200 bg-gray-50 ${
              selected === 10 ? "overflow-hidden" : "p-4 sm:p-6"
            }`}
          >
            <ExerciseContent selected={selected} />
          </div>
        </section>

        <footer className="mt-10 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          Exercícios de React + Tailwind CSS
        </footer>
      </main>
    </div>
  );
}

export default ExerciseGallery;
