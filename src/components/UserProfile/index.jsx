const UserProfile = () => {
  return (
    <section className="flex items-center justify-center w-full py-2 rounded-full cursor-pointer xl:justify-between xl:w-full xl:h-full xl:px-3 xl:hover:bg-gray-200">
      <div className="flex items-center justify-center gap-4">
        <img
          className="flex w-10 h-10 rounded-full"
          src="https://randomuser.me/api/portraits/women/89.jpg"
          alt="user-profile"
        />
        <div className="hidden xl:flex xl:flex-col">
          <h1 className="text-sm font-bold">Fulana da Silva</h1>
          <p className="text-sm text-gray-500">@fulanada_silva</p>
        </div>
      </div>

      <div className="items-center hidden ml-4 space-x-1 xl:flex">
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
      </div>
    </section>
  );
};

export default UserProfile;
