import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Collaborate with Refky
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
        >
          Speaking, workshops, consulting, and hands‑on product prototyping. Let’s build something memorable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          <a
            href="mailto:hello@refky.dev"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-6 py-3 text-sm font-medium shadow-sm"
          >
            Email Refky
          </a>
        </motion.div>
      </div>
    </section>
  );
}
