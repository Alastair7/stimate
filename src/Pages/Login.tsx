const Login = () => {
  return (
    <div className="min-h-screen bg-dark_space">
      <header className="flex flex-col items-center gap-2">
        <h1 className="text-6xl text-gray-200">Stimate</h1>
        <h2 className="text-4xl text-gray-300">
          Estimate with your teammates for FREE
        </h2>
      </header>
      <div className="flex justify-center items-center mt-7">
        <form className="flex gap-4">
          <div className="bg-transparent border-b border-white">
            <input
              className="bg-transparent border-none border-teal-500 text-gray-100 py-2 focus:outline-none"
              type="text"
              placeholder="Nickname"
            />
            <button className="ml-3 bg-sky_blue_100">Set</button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center gap-2 mt-10">
        <button className="bg-cyan-200">Create Session</button>
        <button className="bg-blue-400">Join Session</button>
      </div>
    </div>
  );
};

export { Login };
