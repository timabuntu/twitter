import { IoEllipsisHorizontalSharp as IEtc } from 'react-icons/io5';
import PostImg from '../../assets/images/tailwind_3.jpeg';

const Tweet = () => {
  return (
    <article className="p-4 flex border-b-2 w-[600px] border-gray-100 cursor-pointer hover:bg-gray-100">
      <img
        className="w-12 h-12 rounded-full"
        src="https://randomuser.me/api/portraits/men/26.jpg"
        alt="user-profile"
      />

      <section className="flex-col ml-3">
        <header className="flex justify-between">
          <div className="flex">
            <h1 className="text-sm font-bold">Rafael de Paula</h1>
            <p className="flex ml-2 text-sm text-gray-500">
              @Rafael123 <span className="ml-1 -mt-1">.</span>
              <span className="ml-1">1h</span>
            </p>
          </div>
          <IEtc className="mt-1" />
        </header>

        <div className="flex flex-col mt-1">
          <h2 className="text-gray-800">
            Tailwind v3.0 is hot off the press with a whole host of new features
            and performance improvements, plus a beautiful new docs site 😍
          </h2>
          <div className="mt-2 border-2 border-gray-200 rounded-xl">
            <img
              src={PostImg}
              className="rounded-t-xl border-b-2 border-gray-200 "
              alt="Tailwind 3.0"
            />
            <div className="p-2">
              <a
                href="https://tailwindcss.com/"
                className="text-sm text-gray-500"
              >
                tailwindcss.com
              </a>
              <h3 className="text-gray-800">
                Tailwind CSS v3.0 - Tailwind CSS
              </h3>
              <p className="text-sm text-gray-500">
                Tailwind CSS v3.0 is here — bringing incredible performance
                gains, huge workflow improvements, and a seriously ridiculous
                number of new features.
              </p>
            </div>
          </div>
        </div>

        <footer>
          <h1>footer</h1>
        </footer>
      </section>
    </article>
  );
};
export default Tweet;
