import Button from "./Button";

function LoginForm() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Bem-vindo de volta</h1>

        <p className="mt-2 text-sm text-gray-500">
          Entre na sua conta para continuar.
        </p>
      </div>

      <form className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            E-mail
          </label>

          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Senha
          </label>

          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
            />
            Lembrar de mim
          </label>

          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Esqueci minha senha
          </a>
        </div>

        <Button>Entrar</Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Ainda não possui uma conta?{" "}
        <a href="#" className="font-medium text-blue-600 hover:text-blue-700">
          Criar conta
        </a>
      </p>
    </div>
  );
}

export default LoginForm;
