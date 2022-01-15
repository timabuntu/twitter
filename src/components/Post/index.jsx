import PostImg from '../../assets/images/tailwind_3.jpeg';

const Post = () => {
  return (
    <>
      <article className="p-4 flex relative border-b *w-[600px] border-gray-100 cursor-pointer hover:bg-gray-100">
        <img
          className="w-12 h-12 rounded-full"
          src="https://randomuser.me/api/portraits/men/26.jpg"
          alt="user-profile"
        />

        <section className="flex-col ml-3">
          <header className="flex justify-between">
            <div className="flex items-center ">
              <h1 className="flex text-xs font-bold">Rafael de Paula</h1>
              <p className="flex ml-2 text-xs text-gray-500">
                @Rafael123 <span className="ml-1 -mt-1">.</span>
                <span className="ml-1">1h</span>
              </p>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-100 group">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-gray-600 group-hover:fill-sky-500"
              >
                <g>
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </g>
              </svg>
            </div>
          </header>

          <div className="flex flex-col">
            <h2 className="text-sm text-gray-800">
              Tailwind v3.0 is hot off the press with a whole host of new
              features and performance improvements, plus a beautiful new docs
              site 😍
            </h2>
            <div className="mt-2 border border-gray-200 rounded-xl">
              <img
                src={PostImg}
                className="border-b border-gray-200 rounded-t-xl"
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
            <ul className="flex items-center justify-between *w-[400px] py-2">
              <li className="flex items-center space-x-1 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-gray-600 group-hover:fill-blue-500"
                  >
                    <g>
                      <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                    </g>
                  </svg>
                </div>
                <span className="text-gray-600 group-hover:text-blue-500">
                  80
                </span>
              </li>

              <li className="flex items-center space-x-1 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-gray-600 group-hover:fill-green-500"
                  >
                    <g>
                      <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                    </g>
                  </svg>
                </div>
                <span className="text-gray-600 group-hover:text-green-500">
                  7
                </span>
              </li>

              <li className="flex items-center space-x-1 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-gray-600 group-hover:fill-pink-500"
                  >
                    <g>
                      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                    </g>
                  </svg>
                </div>
                <span className="text-gray-600 group-hover:text-pink-500">
                  100
                </span>
              </li>

              <li className="group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-sky-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-gray-600 group-hover:fill-sky-500"
                  >
                    <g>
                      <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                      <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                    </g>
                  </svg>
                </div>
              </li>
            </ul>
          </footer>
        </section>
      </article>
    </>
  );
};
export default Post;
