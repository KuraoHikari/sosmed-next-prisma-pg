'use client';

const PostHeader = () => {
  return (
    <>
      {/* Profile-User */}
      <div className="flex pb-6 items-center justify-between">
        <div className="flex">
          <a className="inline-block mr-4" href="#">
            <img
              className="rounded-full max-w-none w-12 h-12"
              src="https://randomuser.me/api/portraits/men/35.jpg"
            />
          </a>
          <div className="flex flex-col">
            <div>
              <a
                className="inline-block text-lg font-bold dark:text-white"
                href="#"
              >
                Wade Warren
              </a>
            </div>
            <div className="text-slate-500 dark:text-slate-300 dark:text-slate-400">
              July 17, 2018
            </div>
          </div>
        </div>
      </div>
      {/* End-Profile-User */}
      {/* Title */}
      <h2 className="text-3xl font-extrabold dark:text-white">
        Web Design templates Selection
      </h2>
      {/* End-Title */}
    </>
  );
};
export default PostHeader;
