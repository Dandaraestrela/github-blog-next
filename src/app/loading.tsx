"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
  color: white;
`;

export default function Loading() {
  return <Wrapper>Loading...</Wrapper>;
}
