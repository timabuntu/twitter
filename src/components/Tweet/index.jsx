import { IoEllipsisHorizontalSharp as IEtc } from 'react-icons/io5';
const Tweet = () => {
  return (
    <section className="p-4 mt-1 border-b-2 border-gray-100 cursor-pointer hover:bg-gray-100">
      <article>
        <section className="flex">
          <div className="flex bg-green-200">
            <img
              className="w-12 h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/26.jpg"
              alt="user-profile"
            />
          </div>

          <div className="flex justify-between w-full">
            <div className="flex-1">
              <div className="flex ml-3">
                <h1 className="text-sm font-bold">Rafael de Paula</h1>
                <p className="flex ml-2 text-sm text-gray-500">
                  @Rafael123 <span className="ml-1 -mt-1">.</span>
                  <span className="ml-1">1h</span>
                </p>
              </div>
            </div>
            <IEtc className="mt-1" />
          </div>
        </section>
      </article>
    </section>
  );
};
export default Tweet;
