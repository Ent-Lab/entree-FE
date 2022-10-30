import { useEffect, useState } from "react";

import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";

import { StyledMarkdown } from "./MarkdownRenderer.style";


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
