import { X } from "lucide-react";

export default function ProjectModal({
  project,
  onClose,
}) {
  return (
    <div
      className="
      fixed inset-0
      bg-black/80
      backdrop-blur-md
      flex
      items-center
      justify-center
      z-50
      p-5
      "
    >
      <div
        className="
        w-[65%]
        max-w-2xl
        bg-slate-900
        border
        border-cyan-500/30
        rounded-3xl
        p-5
        relative
        shadow-2xl
        shadow-cyan-500/10
        "
      > 
        <button
          onClick={onClose}
          className="
          absolute
          right-5
          top-5
          text-white
          hover:text-cyan-400
          transition
          "
        >
          <X size={28} />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="
          rounded-xl
          w-full
          h-56
          object-cover
          "
        />

        <h2 className="text-2xl font-bold mt-5">
          {project.title}
        </h2>

        <p className="mt-3 text-gray-400 leading-6">
          {project.description}
        </p>

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mt-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                px-2.5
                py-1
                rounded-full
                bg-cyan-500/20
                text-cyan-300
                border
                border-cyan-500/30
                "
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-8">

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group"
            >
              <span className="shine"></span>
              🌐 Sitio Web
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group"
            >
              <span className="shine"></span>
              💻 GitHub
            </a>
          )}

          {project.pdf && (
            <a
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group"
            >
              <span className="shine"></span>
              📄 Ver PDF
            </a>
          )}

          {project.word && (
            <a
              href={project.word}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group"
            >
              <span className="shine"></span>
              📝 Ver Word
            </a>
          )}

        </div>
      </div>
    </div>
  );
}