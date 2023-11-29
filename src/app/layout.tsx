import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { LayoutWrapper } from "../components/LayoutWrapper";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dandara Estrela Github Blog",
  description: "A blog with Dandara's Github posts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className}`}>
        <StyledComponentsRegistry>
          <LayoutWrapper>{children}</LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
