"use client";
import styled from "styled-components";

import { SummaryPost } from "@/models/posts";
import { PostPreview } from "./PostPreview";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  gap: 24px;
`;

const TitleInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--base-subtitle);
  }
  p {
    font-size: 14px;
    color: var(--base-span);
  }
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid var(--base-border);
  background: var(--base-input);
  font-size: 16px;
  color: var(--base-title);
  ::placeholder {
    color: var(--base-label);
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

interface PostsListProps {
  totalCount: number;
  posts: SummaryPost[];
}

export function PostsList({ totalCount, posts }: PostsListProps) {
  const [search, setSearch] = useState("");
  const [shownResults, setShowResults] = useState(posts);
  useEffect(() => {
    if (!search.length) setShowResults(posts);
    if (search.length)
      setShowResults(
        posts.filter(({ title }) =>
          title.toLowerCase().includes(search.toLowerCase())
        )
      );
  }, [search]);

  return (
    <Wrapper>
      <TitleInfoWrapper>
        <h3>Publicações</h3>
        <p>{totalCount} publicações</p>
      </TitleInfoWrapper>
      <Input
        placeholder="Buscar conteúdo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <PostsGrid>
        {shownResults.map((post) => (
          <PostPreview
            key={post.number}
            title={post.title}
            body={post.body}
            createdAt={post.created_at}
            number={post.number}
          />
        ))}
      </PostsGrid>
    </Wrapper>
  );
}
