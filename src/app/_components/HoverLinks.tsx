"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { website } from "@/lib/website";

export function HoverLinks() {
  const container = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full flex flex-col items-center justify-center gap-8"
    >
      <motion.div variants={item}>
        <img
          src={`https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/img/andy.jpg`}
          alt={website.name}
          className="rounded h-64 w-full sm:h-48 object-cover object-top sm:w-48"
        />
      </motion.div>
      <motion.h1
        variants={item}
        className="text-white sm:text-7xl text-5xl font-bold text-center"
      >
        {website.name}
      </motion.h1>
      <motion.p
        variants={item}
        className="text-white text-sm sm:text-2xl text-center"
      >
        {website.description}
      </motion.p>

      <div className="flex items-center justify-center flex-col sm:flex-row gap-10">
        <motion.div
          variants={item}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(59, 130, 246, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-blue-500 rounded-lg px-8 py-4 shadow-lg"
        >
          <Link
            href="/resume"
            className="text-white text-xl sm:text-2xl font-bold block"
          >
            Resume
          </Link>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(59, 130, 246, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-blue-500 rounded-lg px-8 py-4 shadow-lg"
        >
          <Link
            href="https://blisscode.dev/portfolio"
            className="text-white text-xl sm:text-2xl font-bold block"
          >
            Portfolio
          </Link>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(59, 130, 246, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-blue-500 rounded-lg px-8 py-4 shadow-lg"
        >
          <Link
            href="https://www.linkedin.com/in/andrewgbliss/"
            className="text-white text-xl sm:text-2xl font-bold block"
          >
            LinkedIn
          </Link>
        </motion.div>
      </div>
      <motion.div variants={item} className="text-center text-sm text-white">
        <p>
          Website powered by{" "}
          <a
            href="https://blisscode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            BlissCode.dev
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
