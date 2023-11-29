"use client";

import Markdown from "react-markdown";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4px;
  padding: 40px;
  color: var(--base-title);
  code {
    display: flex;
    min-width: 100%;
    padding: 8px;
    background-color: white;
    border-radius: 4px;
    color: var(--base-input);
  }
`;

export function MarkdownText({ text }: { text: string }) {
  return (
    <Wrapper>
      <Markdown>{text}</Markdown>
    </Wrapper>
  );
}
