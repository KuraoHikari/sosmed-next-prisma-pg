'use client';

import PostBodyImages from './PostBodyImages';

const PostBody = () => {
  const imagesDummy = [
    'https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  ];

  return (
    <>
      <h2
        className="
          font-extrabold 
          text-3xl 
          
          dark:text-white
          "
      >
        Web Design templates Selection
      </h2>
      <div className="py-4">
        <PostBodyImages imageSource={imagesDummy} />
      </div>
      <p className="dark:text-slate-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </>
  );
};

export default PostBody;
