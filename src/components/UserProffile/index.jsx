const User = () => {
  return (
    <section className="flex justify-between mb-2">
      <div className="flex">
        <div className="flex">
          <img
            className="w-10 h-10 rounded-full"
            src="https://randomuser.me/api/portraits/women/89.jpg"
            alt="user-profile"
          />
          <div className="flex flex-col ml-3">
            <h1 className="text-sm font-bold">Fulana da Silva</h1>
            <p className="text-sm text-gray-500">@fulanada_silva</p>
          </div>
        </div>
      </div>
      <div className="flex items-center px-6 space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
      </div>
    </section>
  );
};

export default User;
