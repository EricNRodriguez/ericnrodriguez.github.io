import ReactMarkdown from 'react-markdown'
import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Navigate} from 'react-router-dom';
import "./blog.scss";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export type BlogPost = {
    title: string;
    id: string,
    date: Date;
    sourceUrl: Promise<string>;
}

export type BlogMetadata = {
    blogDir: string;
    posts: BlogPost[];

};

export const BlogIndex = (props: BlogMetadata) => {
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return (
      <div>
        {
          props.posts.map((post) => {
            return (
              <div key={post.id}>
                <Link to={`./${post.id}`}> {`[${post.date.toLocaleDateString("en-US", DATE_OPTIONS as any)}] ${post.title}`}</Link>
              </div>
            );
          })
        }
      </div>
    );
};


export const Blog = (props: BlogMetadata) => {
  let { fileName } = useParams();
  const [blogMarkdown, setBlogMarkdown] = useState('');

  const matchingBlog = props.posts.filter((value) => value.id == fileName)
  if (matchingBlog.length !== 1) {
    return <Navigate to={"/404"} />
  }

  matchingBlog[0].sourceUrl
    .then(fetch)
    .then(res => res.text())
    .then(setBlogMarkdown);

  return (
    <div className={"markdown-blog-post"}>
      <ReactMarkdown
          children={blogMarkdown}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
      />
    </div>
  );
};
