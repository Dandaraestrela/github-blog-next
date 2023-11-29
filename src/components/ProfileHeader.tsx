"use client";

import Image from "next/image";
import styled from "styled-components";
import { UserInterface } from "@/models/user";

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  min-height: 180px;

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
  justify-content: space-between;
  width: 100%;
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
  a {
    font-size: 14px;
    color: var(--brand-blue);
    text-transform: uppercase;
  }
`;

const NextImage = styled(Image)`
  border-radius: 8px;
`;

const TitleLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  img {
    margin-left: 4px;
    vertical-align: top;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialMediaInfo = styled.p`
  color: var(--base-subtitle);
  img {
    margin-right: 8px;
    vertical-align: text-top;
  }
`;

interface ProfileHeaderProps {
  user: UserInterface;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <Wrapper>
      <NextImage width={140} height={140} alt="perfil" src={user.avatar_url} />
      <InfoWrapper>
        <TitleLinkWrapper>
          <h1>{user.name}</h1>
          <a href="https://github.com/Dandaraestrela" target="_blank">
            Github
            <Image
              src="/ic-external-link.svg"
              alt="external-link"
              width={16}
              height={16}
            />
          </a>
        </TitleLinkWrapper>

        <h4>{user.bio}</h4>
        <SocialMediaWrapper>
          <SocialMediaInfo>
            <Image src="/ic-github.svg" alt="building" width={20} height={20} />
            {user.login}
          </SocialMediaInfo>
          {!!user.company && (
            <SocialMediaInfo>
              <Image
                src="/ic-building.svg"
                alt="building"
                width={20}
                height={20}
              />
              {user.company}
            </SocialMediaInfo>
          )}
          <SocialMediaInfo>
            <Image src="/ic-users.svg" alt="building" width={20} height={20} />
            {user.followers}
          </SocialMediaInfo>
        </SocialMediaWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}
