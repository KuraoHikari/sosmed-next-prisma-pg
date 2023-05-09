'use client';

import { PostUserImages } from './';

interface PostHeaderProps {
  user: any;
}

const PostHeader: React.FC<PostHeaderProps> = () => {
  const dummyUser = 'https://randomuser.me/api/portraits/men/35.jpg';
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
          <PostUserImages imageSource={dummyUser} />
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
                Wade Warren
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
