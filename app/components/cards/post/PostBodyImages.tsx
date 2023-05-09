'use client';

import Image from 'next/image';

interface PostBodyImagesProps {
  imageSource: string[];
}

const PostBodyImages: React.FC<PostBodyImagesProps> = ({ imageSource }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image
          className="max-w-full rounded-lg"
          width={500}
          height={500}
          alt="Avatar"
          src={imageSource[0]}
          loading="lazy"
        />
      </div>
    </>
  );
};
export default PostBodyImages;
