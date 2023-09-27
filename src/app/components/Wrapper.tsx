"use client";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 296px;
  background-image: url("/Cover.png");
  background-size: cover;
  @media (max-width: 600px) {
    background-image: url("/Cover_xs.png");
  }
`;

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header>
        <Image src={"Logo_github.svg"} alt="logomarca" />
      </Header>
      {children}
    </Container>
  );
}
