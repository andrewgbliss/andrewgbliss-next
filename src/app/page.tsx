import { website } from "@/lib/website";
import { Metadata } from "next";
import { BusinessCard } from "./_components/BusinessCard";

export const metadata: Metadata = {
  title: website.name,
  description: website.description,
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    title: website.name,
    description: website.description,
    images: [
      {
        url: "https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/img/andy.jpg",
      },
    ],
    type: "website",
    url: website.url,
    siteName: website.name,
  },
  twitter: {
    card: "summary_large_image",
    title: website.name,
    description: website.description,
    images: [
      "https://storage.googleapis.com/blisscoder-0-public/andrewgbliss/img/andy.jpg",
    ],
  },
};

export default function Page() {
  return (
    <div className="p-5 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900">
      <BusinessCard />
    </div>
  );
}
