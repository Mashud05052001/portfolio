"use client";
import DOMPurify from "dompurify";

type TProps = { description: string };

const HtmlDescription = ({ description }: TProps) => {
  return (
    <div className="article-content dark:text-gray-300">
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description as string),
        }}
      />
    </div>
  );
};

export default HtmlDescription;
