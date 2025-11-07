import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Interactive AI Tutor",
    description:
      "A chat-based learning companion with concept visualizations and adaptive feedback.",
    tags: ["React", "FastAPI", "OpenAI"],
    live: "#",
    code: "#",
  },
  {
    title: "Story‑Driven Model Demos",
    description:
      "Narrative showcases that teach model capabilities through playful micro‑interactions.",
    tags: ["Framer Motion", "Vite", "Spline"],
    live: "#",
    code: "#",
  },
  {
    title: "Curriculum Builder",
    description:
      "An authoring tool for educators to assemble interactive AI lessons and assessments.",
    tags: ["MongoDB", "Node", "Tailwind"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Selected Projects
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-black/5 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.code} className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:underline">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
