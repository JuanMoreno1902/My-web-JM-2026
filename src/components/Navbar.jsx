function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 w-full z-50
      bg-slate-950/10
      backdrop-blur-xl
      border-b border-white/5
    ">
      <div className="
        max-w-7xl
        mx-auto
        px-8
        py-5
        flex
        justify-between
        items-center
      ">
        <h1 className="
          text-white
          text-3xl
          font-bold
          tracking-wide
          cursor-pointer
        ">
          Juan Moreno
        </h1>

        <ul className="
          flex
          items-center
          gap-10
          text-white
          font-medium
        ">
          <li>
            <a
              href="#experiencia"
              className="
                transition-all
                duration-300
                hover:text-cyan-400
              "
            >
              Experiencia
            </a>
          </li>

          <li>
            <a
              href="#proyectos"
              className="
                transition-all
                duration-300
                hover:text-cyan-400
              "
            >
              Proyectos
            </a>
          </li>

          <li>
            <a
              href="#sobre-mi"
              className="
                transition-all
                duration-300
                hover:text-cyan-400
              "
            >
                Sobre mí
            </a>
          </li>

          <li>
            <a
              href="#contacto"
              className="
                transition-all
                duration-300
                hover:text-cyan-400
              "
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;