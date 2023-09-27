import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { Wrapper } from "./components/Wrapper";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dandara Estrela Github-posts blog",
  description: "A blog with Dandara's github posts",
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
          <Wrapper>{children}</Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
