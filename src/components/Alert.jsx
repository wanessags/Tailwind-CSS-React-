
function Alert({
  title,
  children,
  variant = "info",
}) {
  const variants = {
    success: {
      container: "border-green-200 bg-green-50",
      title: "text-green-800",
      text: "text-green-700",
      icon: "✓",
    },
    error: {
      container: "border-red-200 bg-red-50",
      title: "text-red-800",
      text: "text-red-700",
      icon: "✕",
    },
    warning: {
      container: "border-yellow-200 bg-yellow-50",
      title: "text-yellow-800",
      text: "text-yellow-700",
      icon: "!",
    },
    info: {
      container: "border-blue-200 bg-blue-50",
      title: "text-blue-800",
      text: "text-blue-700",
      icon: "i",
    },
  }

  const style = variants[variant] || variants.info

  return (
    <div
      role="alert"
      className={`flex items-start gap-4 rounded-xl border p-5 ${style.container}`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current text-lg font-bold ${style.title}`}
        aria-hidden="true"
      >
        {style.icon}
      </span>

      <div>
        <h2 className={`font-semibold ${style.title}`}>
          {title}
        </h2>

        <div className={`mt-1 text-sm leading-6 ${style.text}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Alert
