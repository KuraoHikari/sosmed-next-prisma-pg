'use client';

import { PostBody, PostComment, PostFooter, PostHeader } from './';

const PostCard = () => {
  return (
    <article
      className="
    break-inside

    bg-clip-border
    bg-white
    flex 
    flex-col 
    mb-4 
    p-6 
    rounded-xl  
    
    dark:bg-slate-800"
    >
      <PostHeader user={null} />
      <PostBody />
      <PostFooter />
      <PostComment />
    </article>
  );
};
export default PostCard;
