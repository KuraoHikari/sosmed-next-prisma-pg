'use client';

import Image from 'next/image';

interface PostUserImagesProps {
  imageSource: string;
}

const PostUserImages: React.FC<PostUserImagesProps> = ({ imageSource }) => {
  return (
    <>
      <div className="inline-block mr-4">
        <Image
          className="rounded-full max-w-none w-12 h-12"
          width={48}
          height={48}
          alt="Avatar"
          src={imageSource || '/images/placeholder.jpg'}
        />
      </div>
    </>
  );
};
export default PostUserImages;
