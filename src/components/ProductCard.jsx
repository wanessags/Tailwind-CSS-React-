import Button from "./Button";
import Badge from "./Badge";

function ProductCard({
  name,
  description,
  price,
  image,
  status = "Disponível",
}) {
  return (
    <article className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4">
          <Badge variant="success">{status}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>

        <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-xl font-bold text-gray-900">{price}</span>

          <Button>Comprar</Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
