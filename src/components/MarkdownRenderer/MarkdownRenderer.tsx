import styled from "styled-components";

import { useEffect, useState } from "react";

import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ markdown }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (markdown) {
      setIsLoading(false);
    }
  }, [markdown]);

  return (
    <StyledMarkdown>
      {isLoading ?
        <div>loading...</div>
        :
        <ReactMarkDown remarkPlugins={[remarkGfm]} children={markdown} />
      }

    </StyledMarkdown>
  );
}

export const StyledMarkdown = styled.div`
  line-height: 2.5rem;
`;