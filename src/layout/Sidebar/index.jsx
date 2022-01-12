import Logo from '../../components/Logo';
import Post from '../../components/Post';
import User from '../../components/User';

const links = [
  { name: 'Explore' },
  { name: 'Notifications' },
  { name: 'Messages' },
  { name: 'Bookmarks' },
  { name: 'Lists' },
  { name: 'Profile' },
  { name: 'More' },
];

const Sidebar = () => {
  return (
    <section className="flex flex-col justify-between h-screen px-6 py-2 border-r-2 w-72 border-r-gray-100">
      <div className="">
        <Logo />
        <nav>
          <ul className="">
            <li className="flex mt-2">
              <div className="flex items-center pl-2 pr-6 text-xl text-gray-900 duration-200 rounded-full hover:bg-gray-200 hover:font-bold">
                <img className="bg-black w-7 h-7" src="" alt="" />
                <a href="/" className="py-3 ml-4 font-bold">
                  Home
                </a>
              </div>
            </li>
            {links.map(link => (
              <li className="flex mt-2">
                <div className="flex items-center pl-2 pr-6 text-xl text-gray-900 duration-200 rounded-full hover:bg-gray-200">
                  <img className="bg-black w-7 h-7" src="" alt="" />
                  <a href="/" className="py-3 ml-4 ">
                    {link.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <Post />
      </div>
      <User />
    </section>
  );
};

export default Sidebar;
