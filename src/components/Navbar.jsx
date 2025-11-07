import { motion } from "framer-motion";
import { Rocket, User, FolderGit2 } from "lucide-react";

export default function Navbar() {
  const links = [
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: FolderGit2 },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <Rocket className="h-5 w-5 text-indigo-600" />
          <span className="text-lg">Refky</span>
        </a>
        <nav className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-white/10 transition-colors"
            >
              <Icon className="h-4 w-4" />
              {label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white text-sm shadow-sm"
          >
            Let's talk
          </motion.a>
        </nav>
      </div>
    </header>
  );
}
