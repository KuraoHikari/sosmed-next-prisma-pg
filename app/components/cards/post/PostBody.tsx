'use client';

const PostBody = () => {
  return (
    <>
      {/* Image-Post */}
      <div className="py-4">
        <div className="flex justify-between gap-1 mb-1">
          <a className="flex" href="#">
            <img
              className="max-w-full rounded-tl-lg"
              src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </a>
          <a className="flex" href="#">
            <img
              className="max-w-full"
              src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </a>
          <a className="flex" href="#">
            <img
              className="max-w-full rounded-tr-lg"
              src="https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </a>
        </div>
        <div className="flex justify-between gap-1">
          <a className="flex" href="#">
            <img
              className="max-w-full rounded-bl-lg"
              src="https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </a>
          <a className="flex" href="#">
            <img
              className="max-w-full rounded-br-lg"
              src="https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </a>
        </div>
      </div>
      {/* End-Image-Post */}
      {/* Quote-Post */}
      <p className="dark:text-slate-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {/* End-Quote-Post */}
    </>
  );
};

export default PostBody;
