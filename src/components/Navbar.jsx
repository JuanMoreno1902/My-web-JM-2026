import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Experiencia", href: "#experiencia" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-slate-950/10
        backdrop-blur-xl
        border-b border-white/5
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6 md:px-8
          py-5
          flex
          justify-between
          items-center
        "
      >
        {/* Logo */}
        <h1
          className="
            text-white
            text-2xl md:text-3xl
            font-bold
            tracking-wide
            cursor-pointer
          "
        >
          Juan Moreno
        </h1>

        {/* Menú escritorio */}
        <ul
          className="
            hidden
            md:flex
            items-center
            gap-10
            text-white
            font-medium
          "
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="
                  transition-all
                  duration-300
                  hover:text-cyan-400
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-white
            transition
          "
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <ul
          className="
            flex
            flex-col
            items-center
            gap-6
            py-6
            bg-slate-950/90
            backdrop-blur-xl
            text-white
            font-medium
          "
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  transition
                  duration-300
                  hover:text-cyan-400
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;