const Post = () => {
  return (
    <div className="mt-6">
      <button className="px-20 py-3 transition-colors duration-200 transform rounded-full shadow-lg bg-sky-500 hover:bg-sky-600">
        <p className="hidden font-bold text-white sm:block ">Tweet</p>
        <p className="font-bold text-white sm:hidden">++</p>
      </button>
    </div>
  );
};

export default Post;
