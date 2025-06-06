import { Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/queryProvider";
import type { Metadata } from "next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  console.log("🔶 Starting Mock Service Worker...");
  // This will run the MSW setup code
  import("@/mocks").then(({ setupMocks }) => setupMocks());
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${poppins.className} bg-fblack-opacity100 min-h-screen w-full`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
