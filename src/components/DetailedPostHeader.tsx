"use client";

import Image from "next/image";
import styled from "styled-components";
import { dateRelativeToNow, formatHoverDate } from "@/utils/date";
import Link from "next/link";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 180px;

  padding: 32px;
  margin-top: -100px;
  gap: 32px;

  border-radius: 10px;

  background-color: var(--base-profile);
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.3);

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

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  img {
    vertical-align: top;
  }
  a {
    display: flex;
    gap: 8px;
    font-size: 14px;
    color: var(--brand-blue);
    text-transform: uppercase;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const MediaInfo = styled.p`
  color: var(--base-subtitle);
  img {
    margin-right: 8px;
    vertical-align: text-top;
  }
`;

interface DetailedPostHeaderProps {
  title: string;
  user: string;
  createdAt: string;
  amountOfComments: number;
  linkToPost: string;
}

export function DetailedPostHeader({
  title,
  user,
  createdAt,
  amountOfComments,
  linkToPost,
}: DetailedPostHeaderProps) {
  const formatedCreatedAt = new Date(createdAt);
  return (
    <Wrapper>
      <ActionsWrapper>
        <Link href="/">
          <Image
            src="/ic-arrow-left.svg"
            alt="external-link"
            width={16}
            height={16}
          />
          VOLTAR
        </Link>
        <a href={linkToPost} target="_blank">
          ver no github
          <Image
            src="/ic-external-link.svg"
            alt="external-link"
            width={16}
            height={16}
          />
        </a>
      </ActionsWrapper>
      <h1>{title}</h1>
      <SocialMediaWrapper>
        <MediaInfo>
          <Image src="/ic-github.svg" alt="building" width={20} height={20} />
          {user}
        </MediaInfo>
        <MediaInfo>
          <Image src="/ic-calendar.svg" alt="building" width={20} height={20} />
          <time
            title={formatHoverDate(formatedCreatedAt)}
            dateTime={formatedCreatedAt.toISOString()}
          >
            {dateRelativeToNow(formatedCreatedAt)}
          </time>
        </MediaInfo>

        <MediaInfo>
          <Image src="/ic-comments.svg" alt="building" width={20} height={20} />
          {amountOfComments} comentários
        </MediaInfo>
      </SocialMediaWrapper>
    </Wrapper>
  );
}
