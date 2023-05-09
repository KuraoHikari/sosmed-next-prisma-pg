'use client';

const PostFooter = () => {
  return (
    <>
      {/* Emot-Reaction-Post */}
      <div className="py-4">
        <div
          className="
        inline-flex 
        items-center
        "
        >
          <span className="mr-2">
            <svg
              className="fill-rose-600 dark:fill-rose-400"
              style={{ width: '24px', height: '24px' }}
              viewBox="0 0 24 24"
            >
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
            </svg>
          </span>
          <span className="font-bold text-lg">34</span>
        </div>
      </div>
      {/* End-Emot-Reaction-Post */}
      {/* Comment-Box-Input */}
      <div className="relative">
        <input
          className="
          bg-slate-100 
          font-medium
          h-11 
          pt-2 
          pb-2 
          pl-3 
          pr-20
          rounded-lg
          w-full   
          
          dark:bg-slate-600  
          dark:placeholder:text-slate-300
          placeholder:text-slate-600 
          "
          type="text"
          placeholder="Write a comment"
        />
        <span
          className="
            absolute 
            flex 
            items-center 
            -mt-3 
            right-3 
            top-2/4 
        "
        >
          <svg
            className="fill-blue-500 dark:fill-slate-50"
            style={{ width: '24px', height: '24px' }}
            viewBox="0 0 24 24"
          >
            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
          </svg>
        </span>
      </div>
      {/* End-Comment-Box-Input */}
    </>
  );
};
export default PostFooter;
