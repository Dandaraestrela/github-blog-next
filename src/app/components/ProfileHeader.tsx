"use client";

import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  min-height: 212px;

  padding: 32px;
  margin-top: -100px;
  gap: 32px;

  border-radius: 10px;

  background-color: var(--base-profile);
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.3);

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 130%;
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: var(--base-title);
  }
  h4 {
    font-size: 16px;
    font-weight: 400;
    color: var(--base-subtitle);
  }
`;

const SocialMediaWrapper = styled.div`
  display: grid;
`;

export function ProfileHeader() {
  return (
    <Wrapper>
      <img
        width={100}
        height={100}
        alt="perfil"
        src="https://static.vecteezy.com/ti/vetor-gratis/p3/3715527-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-vetor.jpg"
      />
      <InfoWrapper>
        <h1>Nome completo</h1>
        <h4>Texto descrição</h4>
        <SocialMediaWrapper>
          <Image src="/ic-building.svg" alt="building" width={20} height={20} />
        </SocialMediaWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}
