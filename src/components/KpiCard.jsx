function KpiCard({ title, value, description, trend, trendType = "positive" }) {
  const trendStyles = {
    positive: "bg-green-100 text-green-700",
    negative: "bg-red-100 text-red-700",
    neutral: "bg-gray-100 text-gray-700",
  };

  return (
    <article className="w-full rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>

          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${trendStyles[trendType]}`}
        >
          {trend}
        </span>
      </div>

      <p className="mt-4 text-sm text-gray-500">{description}</p>
    </article>
  );
}

export default KpiCard;
