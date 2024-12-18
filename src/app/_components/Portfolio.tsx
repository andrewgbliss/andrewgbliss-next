"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "BlissCode",
    description: "Business site for web development and design services.",
    image:
      "https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/img/portfolio-blisscodedev.png",
    url: "https://www.blisscode.dev",
  },
  {
    title: "Blog",
    description: "Personal blog for thoughts and ideas.",
    image:
      "https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/img/portfolio-blisscode-articles.png",
    url: "https://www.blisscode.dev/articles",
  },
  {
    title: "Diluted Science",
    description: "Music website for local artists.",
    image:
      "https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/img/portfolio-diluted-science.png",
    url: "https://dilutedscience.com",
  },
  {
    title: "Abybyo",
    description:
      "Language learning app for adults with little to no time to learn.",
    image:
      "https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/img/portfolio-abybyo.png",
    url: "https://abybyo.com",
  },
  {
    title: "Zero Fall Studios",
    description: "Game development studio website.",
    image:
      "https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/img/portfolio-zerofall.png",
    url: "https://www.zerofallstudios.com",
  },
];

export default function PortfolioPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
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
    <>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1
          variants={item}
          className="text-white text-4xl font-bold text-center mb-8"
        >
          My Portfolio
        </motion.h1>
        <motion.div variants={item}>
          <Link href="/" className="text-white text-xl hover:underline">
            Back
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
