import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  onClick
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      onClick={onClick}
      className="
      cursor-pointer
      rounded-2xl
      border border-cyan-500/30
      bg-slate-900/50
      backdrop-blur-lg
      p-5
      hover:shadow-cyan-500/30
      hover:shadow-2xl
      transition-all
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
        rounded-xl
        h-52
        w-full
        object-cover
        "
      />

      <h3 className="mt-4 text-2xl font-bold text-white">
        {project.title}
      </h3>

      <p className="mt-2 text-gray-400">
        {project.shortDescription}
      </p>
    </motion.div>
  );
}