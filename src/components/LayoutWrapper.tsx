"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: var(--base-background);
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 864px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 296px;
  background-image: url("/Cover.png");
  background-size: cover;
  img {
    margin-top: 50px;
  }
  a {
    height: fit-content;
  }

  @media (max-width: 600px) {
    background-image: url("/Cover_xs.png");
  }
`;

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image
            src={"/Logo_github.svg"}
            alt="logomarca"
            width={120}
            height={120}
          />
        </Link>
      </Header>
      <Section>{children}</Section>
    </Container>
  );
}
