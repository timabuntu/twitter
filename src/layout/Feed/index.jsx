import { MdOutlineAutoAwesome as ITopTweets } from 'react-icons/md';

const Feed = () => {
  return (
    <main className="flex flex-col border-r-2 border-gray-100">
      <header className="flex w-[600px] p-4 opacity-90 sticky top-0 items-center bg-white px-4">
        <h1 className="text-xl font-bold text-gray-900">Home</h1>
        <ITopTweets className="w-6 h-6 ml-auto" />
      </header>

      <section className="flex px-4 py-3 w-[600px] border-b-2 border-gray-100">
        <div className="flex">
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/89.jpg"
              alt="user-profile"
            />
          </div>

          <div className=" w-[550px]">
            <div className="mt-4 ml-3">
              <textarea
                className="text-xl placeholder-gray-500 resize-none"
                placeholder="What's happening?"
              />
              <div className="flex">
                <div className="">{/* icons */}</div>
                <button className="px-5 py-2 ml-auto font-medium text-white transition-colors duration-200 rounded-full bg-sky-300 hover:bg-sky-600">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Feed;
