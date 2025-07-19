import type { Metadata } from "next";
import "@/styles/globals.scss";




export const metadata: Metadata = {
  title: "Bolibrate Starter",
  description: "Next.js 15 boilerplate with auth and RTL support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
