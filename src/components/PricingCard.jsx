import Button from "./Button.jsx";

function PricingCard({
  name,
  price,
  description,
  features = [],
  featured = false,
}) {
  return (
    <article
      className={`relative flex w-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        featured ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-200"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
          Mais popular
        </span>
      )}

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>

        <p className="mt-2 text-sm text-gray-500">{description}</p>

        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-gray-900">R$ {price}</span>

          <span className="text-sm text-gray-500">/mês</span>
        </div>
      </div>

      <ul className="mb-8 flex-1 space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm text-gray-700"
          >
            <span className="font-bold text-green-600">✓</span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button variant={featured ? "primary" : "secondary"}>
          Escolher plano
        </Button>
      </div>
    </article>
  );
}

export default PricingCard;
