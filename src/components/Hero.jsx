import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from "react-icons/fa";
import portada from "../assets/portada.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden min-h-[88vh] flex items-center"
    >
      {/* Glow */}
      <div className="absolute right-0 top-1/2 h-150 w-150 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 py-24 lg:flex-row">

        {/* Texto */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
            Juan Alejandro
            <br />
            <span className="text-blue-500">
              Moreno Santos
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-8">
            Ingeniero en Sistemas y Computación especializado en
            <span className="text-white font-semibold">
              {" "}Desarrollo Full Stack Web Developer{" "}
            </span>
            &
            <span className="text-white font-semibold">
              {" "}Ciberseguridad.
            </span>
          </p>

          {/* Badges */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              "React",
              "Angular",
              "Node.js",
              "Kali Linux",
              "Docker",
              "Networking",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-500/40 bg-slate-900 px-4 py-2 text-sm transition hover:border-blue-400 hover:bg-blue-500/10"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* Botones */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
            >
              Contactarme
            </a>

            <a
              href="https://github.com/JuanMoreno1902"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-4 hover:border-blue-500"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/juan-moreno-santos-9a223630a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-4 hover:border-blue-500"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="/juanmoreno_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-4 hover:border-blue-500"
            >
              <FaDownload />
              CV
            </a>
          </motion.div>
        </motion.div>

        {/* Foto */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-blue-600 blur-[120px] opacity-30"></div>

          <img
            src={portada}
            alt="Juan Alejandro"
            className="relative h-80 w-80 rounded-full border-4 border-slate-700 object-cover shadow-2xl lg:h-107.5 lg:w-107.5"
          />
        </motion.div>
      </div>

      {/* Flecha */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <FaArrowDown className="animate-bounce text-2xl text-slate-500" />
      </motion.div>
    </section>
  );
}