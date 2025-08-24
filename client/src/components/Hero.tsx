import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100">
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center"
      >
        Joey Vedder
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-600 mt-4 text-center"
      >
        Web Developer • Designer • Creator
      </motion.h2>

      {/* Call to Action */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-medium shadow-lg hover:bg-indigo-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
