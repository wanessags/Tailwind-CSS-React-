import Avatar from "./Avatar";
import Badge from "./Badge";

function ProfileCard({ name, role, image, status = "Ativo", description }) {
  return (
    <article className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md">
      <div className="flex items-center gap-4">
        <Avatar src={image} alt={`Foto de ${name}`} size="lg" />

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-xl font-bold text-gray-900">{name}</h2>

          <p className="mt-1 text-sm text-gray-500">{role}</p>
        </div>

        <Badge variant="success">{status}</Badge>
      </div>

      <p className="mt-5 text-sm leading-6 text-gray-600">{description}</p>
    </article>
  );
}

export default ProfileCard;
