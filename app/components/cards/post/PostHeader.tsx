'use client';

import { PostUserImages } from './';

interface PostHeaderProps {
  user: {
    email: string;
    name?: string | null;
    image?: string | null;
  };
  createdAt: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ user }) => {
  return (
    <>
      {/* Profile-User */}
      <div
        className="
      flex 
      items-center 
      justify-between
      pb-6 
      "
      >
        <div className="flex">
          <PostUserImages imageSource={user.image} />
          <div className="flex flex-col">
            <div>
              <div
                className="
                  font-bold 
                  inline-block 
                  text-lg  
                  
                  dark:text-white
                  "
              >
                {user.name}
              </div>
            </div>
            <div
              className="
            text-slate-500 
            
            dark:text-slate-300 
           "
            >
              July 17, 2018
            </div>
          </div>
        </div>
      </div>
      {/* End-Profile-User */}
    </>
  );
};
export default PostHeader;
