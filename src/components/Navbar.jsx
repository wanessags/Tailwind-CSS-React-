import { useState } from "react";

function Navbar({ brand = "MeuSite", links = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="text-2xl font-bold text-blue-600">
            {brand}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-gray-600 transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-gray-200 py-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
