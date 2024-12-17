import { website } from "@/lib/website";
import { Metadata } from "next";
import { HoverLinks } from "./_components/HoverLinks";

export const metadata: Metadata = {
  title: website.name,
  description: website.description,
  themeColor: "#000000",
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
    <div className="p-5 min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950">
      <HoverLinks />
    </div>
  );
}
