'use client';

import PostUserImages from './PostUserImage';

const PostComments = () => {
  const dummyImage = 'https://randomuser.me/api/portraits/men/82.jpg';
  return (
    <div className="pt-6">
      {/* Comment-Row */}
      <div className="media flex pb-4">
        <PostUserImages imageSource={dummyImage} />
        <div className="media-body">
          <div>
            <a className="inline-block text-base font-bold mr-2" href="#">
              Leslie Alexander
            </a>
            <span className="text-slate-500 dark:text-slate-300">
              25 minutes ago
            </span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <div className="mt-2 flex items-center">
            <a className="inline-flex items-center py-2 mr-3" href="#">
              <span className="mr-2">
                <svg
                  className="fill-rose-600 dark:fill-rose-400"
                  style={{ width: '22px', height: '22px' }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                </svg>
              </span>
              <span className="text-base font-bold">12</span>
            </a>
          </div>
        </div>
      </div>
      {/* End-Comment-Row */}
      {/* More-Comment */}
      <div className="w-full">
        <a
          href="#"
          className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
        >
          Show more comments
        </a>
      </div>
      {/* End-More-Comment */}
    </div>
  );
};

export default PostComments;
