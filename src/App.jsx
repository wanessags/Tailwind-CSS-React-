import ProductCard from "./components/ProductCard";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Product Card</h1>

          <p className="mt-2 text-gray-600">
            Cards de produtos reutilizáveis com React e Tailwind CSS.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            name="Fone Bluetooth"
            description="Fone sem fio com conexão Bluetooth e bateria de longa duração."
            price="R$ 199,90"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
            status="Disponível"
          />

          <ProductCard
            name="Smartwatch"
            description="Relógio inteligente com monitoramento de atividades e notificações."
            price="R$ 349,90"
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
            status="Disponível"
          />

          <ProductCard
            name="Câmera Fotográfica"
            description="Câmera compacta para registrar seus melhores momentos com qualidade."
            price="R$ 899,90"
            image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
            status="Novo"
          />
        </section>
      </div>
    </main>
  );
}

export default App;
