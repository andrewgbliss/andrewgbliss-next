"use client";

import { resume } from "@/lib/resume";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  HomeIcon,
  BookIcon,
  CalendarIcon,
  LinkIcon,
  CircleIcon,
  SchoolIcon,
} from "lucide-react";
import { ModeToggle } from "@/components/ui/dark-mode-toggle";
import { Facebook, Twitter } from "lucide-react";
import { website } from "@/lib/website";
import { QRCodeSVG } from "qrcode.react";
import { BskyIcon } from "@/app/_components/BskyIcon";
import Link from "next/link";

export function Resume() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 sm:gap-4">
      <div className="sm:col-span-4 lg:col-span-3">
        <Card className="p-6">
          <div className="flex justify-center">
            <img
              src={`https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/img/andy.jpg`}
              alt={resume.name}
              className="rounded w-64"
            />
          </div>
          <Link href="/">
            <h1 className="text-2xl font-bold text-center mt-4 mb-2">
              {resume.name}
            </h1>
          </Link>
          <p className="text-sm text-muted-foreground mb-4 text-center">
            {resume.bio}
          </p>
          <div className="flex items-center justify-center gap-4 pb-5">
            <Button
              className="w-full p-4"
              onClick={() =>
                window.open(
                  "https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/docs/Andrew-Bliss-Resume.pdf",
                  "_blank"
                )
              }
            >
              Download PDF
            </Button>
            <ModeToggle />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HomeIcon className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">
                {resume.address.city}, {resume.address.state}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BookIcon className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">
                {resume.email}
              </span>
            </div>
          </div>
          <Separator className="my-4" />
          <h2 className="text-lg font-semibold mb-2">Education</h2>
          <div className="flex items-start gap-2">
            <SchoolIcon className="h-4 w-4 mt-1" />
            <div>
              <p className="font-medium">{resume.education.school}</p>
              <p className="text-sm text-muted-foreground">
                {resume.education.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {resume.education.from} to {resume.education.to}
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <h2 className="text-lg font-semibold mb-2">Links</h2>
          <div className="space-y-2 overflow-hidden">
            {resume.links.map((href, i) => (
              <div key={i} className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  {href}
                </a>
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <h2 className="text-lg font-semibold mb-2">Share</h2>
          <div className="flex gap-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${website.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2]"
            >
              <Facebook size={24} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${website.url}&text=Check%20this%20out!`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2]"
            >
              <Twitter size={24} />
            </a>
            <a
              href={`https://bsky.app/intent/compose?text=${encodeURIComponent(
                `${resume.name} - ${website.url}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2]"
              title="Share on Bluesky"
            >
              <BskyIcon height={24} />
            </a>
          </div>
          <div className="flex justify-center p-5">
            <div className="fade-up w-fit rounded-lg bg-white p-5">
              <QRCodeSVG value={`${website.url}/resume`} size={128} />
            </div>
          </div>
        </Card>
      </div>
      <div className="sm:col-span-8 lg:col-span-9">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <div className="space-y-6">
            {resume.workExperience.map((work, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold">
                  {work.title} / {work.company}
                </h3>
                <div className="flex items-center gap-2 my-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="text-sm">
                    {work.from} - {work.to}
                  </span>
                </div>
                <ul className="space-y-2 my-4">
                  {work.bulletpoints.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CircleIcon className="h-3 w-3 mt-1.5" />
                      <span className="text-sm text-muted-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {work.skills.map((skill, k) => (
                    <Badge key={k} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                {i < resume.workExperience.length - 1 && (
                  <Separator className="my-6" />
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
