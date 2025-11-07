import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 dark:bg-white/10 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-100 backdrop-blur"
        >
          Innovative Storyteller • AI Creator • Educator
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Refky crafts memorable AI experiences
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">through code and narrative.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-gray-700 dark:text-gray-300"
        >
          A full‑stack developer blending technical precision with playful, interactive 3D to educate and inspire.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 flex items-center gap-3"
        >
          <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow-sm">
            View projects
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 border border-gray-300/60 dark:border-white/20">
            Get in touch
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white dark:from-black to-transparent" />
    </section>
  );
}
