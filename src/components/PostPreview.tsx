import { dateRelativeToNow, formatHoverDate } from "@/utils/date";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 460px;
  max-height: 300px;
  padding: 32px;
  border-radius: 10px;
  background-color: var(--base-post);

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--base-text);
  }
`;

const TitleAndDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  h3 {
    max-width: 70%;
    font-size: 20px;
    line-height: 160%;
    color: var(--base-title);
  }
  time {
    font-size: 14px;
    line-height: 28px;
  }
`;

interface PostPreviewProps {
  title: string;
  body: string;
  createdAt: string;
  number: number;
}

export function PostPreview({
  title,
  body,
  createdAt,
  number,
}: PostPreviewProps) {
  const createdAtDate = new Date(createdAt);
  const createdAtDateFormated = formatHoverDate(createdAtDate);
  const publishedDateRelativeToNow = dateRelativeToNow(createdAtDate);

  return (
    <Link href={`/detailed-post/${number}`}>
      <Wrapper>
        <TitleAndDataWrapper>
          <h3>{title}</h3>
          <time
            title={createdAtDateFormated}
            dateTime={createdAtDate.toISOString()}
          >
            <p>{publishedDateRelativeToNow}</p>
          </time>
        </TitleAndDataWrapper>
        <p>{body}</p>
      </Wrapper>
    </Link>
  );
}
