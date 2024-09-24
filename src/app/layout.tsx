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
    icon: "../../public/logos/favicon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" style={{ margin: 0, padding: 0 }}>
      <head className="container-head-app">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <main className="container">
          <AntdRegistry>{children}</AntdRegistry>
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
