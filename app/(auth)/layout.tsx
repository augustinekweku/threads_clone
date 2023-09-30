import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A NextJs 13 Threads Clone",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <div className="w-full  flex items-center justify-center h-min-screen">
          <body className={`${inter.className} bg-dark-1`}>{children}</body>
        </div>
      </html>
    </ClerkProvider>
  );
}
