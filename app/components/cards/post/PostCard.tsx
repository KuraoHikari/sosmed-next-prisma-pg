'use client';

import { SafePost, SafeUser } from '@/app/types';
import { PostBody, PostComment, PostFooter, PostHeader } from './';
interface PostCardProps {
  author: {
    email: string;
    name?: string | null;
    image?: string | null;
  };
  data: SafePost;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const PostCard: React.FC<PostCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId,
  currentUser,
  author,
}) => {
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
      <PostHeader user={author} createdAt={data.createdAt} />
      <PostBody />
      <PostFooter />
      <PostComment />
    </article>
  );
};
export default PostCard;
