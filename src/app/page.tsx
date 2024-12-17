"use client";

import { website } from "@/lib/website";
import { resume } from "../lib/resume";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";

export default function Resume() {
  return (
    <div className="p-5 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col items-center justify-center"
      >
        <Card className="p-6 max-w-2xl w-full">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={`https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/img/andy.jpg`}
                alt={resume.name}
                className="rounded h-96 w-full sm:h-48 object-cover object-top sm:w-48"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-2">{resume.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{resume.bio}</p>
              <div className="flex flex-row gap-2">
                <Link href="/resume" className="text-primary hover:underline">
                  Resume
                </Link>
                <Link
                  href="https://www.linkedin.com/in/andrewgbliss/"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://www.github.com/andrewgbliss"
                  className="text-primary hover:underline"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center w-fit rounded-lg bg-white p-5">
              <QRCodeSVG value={website.url} size={128} />
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
