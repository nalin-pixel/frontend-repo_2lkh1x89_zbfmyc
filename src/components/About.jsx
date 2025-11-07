import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Sparkles } from "lucide-react";

export default function About() {
  const items = [
    {
      icon: GraduationCap,
      title: "Educator",
      text: "Workshops and curricula that demystify AI—making complex ideas engaging and accessible.",
    },
    {
      icon: BrainCircuit,
      title: "Builder",
      text: "Production‑ready full‑stack apps with modern stacks, thoughtful UX, and scalable architecture.",
    },
    {
      icon: Sparkles,
      title: "Storyteller",
      text: "Narrative‑driven demos that showcase AI capabilities with playfulness and clarity.",
    },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          About Refky
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-gray-700 dark:text-gray-300"
        >
          I help teams and communities learn, prototype, and launch AI‑powered experiences. My work sits at the intersection of engineering, design, and storytelling.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-[1px]">
                  <div className="h-full w-full rounded-lg bg-white dark:bg-black grid place-items-center">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
