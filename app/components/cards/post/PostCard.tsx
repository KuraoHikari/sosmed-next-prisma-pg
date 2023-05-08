'use client';

import { PostBody, PostComment, PostFooter, PostHeader } from './';

const PostCard = () => {
  return (
    <article className="break-inside mb-4 p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
      <PostHeader />
      <PostBody />
      <PostFooter />
      <PostComment />
    </article>
  );
};
export default PostCard;
