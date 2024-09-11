import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonnadona Hub",
  description: "Bonnadona Hub software by BonnaTics",
  icons: {
    icon: "favicon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" style={{ margin: 0, padding: 0 }}>
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <main className="container">
          <AntdRegistry>{children}</AntdRegistry>
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
