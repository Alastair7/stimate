import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";

const Login = () => {
  const [nickname, setNickname] = useState<string>("");
  const connectWs = () => io("ws://localhost:3000");

  const onClickNickname = () => {
    window.sessionStorage.setItem("nickname", nickname ?? "");
  };
  const onChangeNickname = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(event.currentTarget.value);
    },
    [nickname]
  );

  useEffect(() => {
    const value = sessionStorage.getItem("nickname");
    setNickname(value ?? "");
  }, []);

  return (
    <div className="min-h-screen bg-dark_space">
      <header className="flex flex-col items-center gap-2 mb-20">
        <h1 className="text-8xl text-gray-200">Stimate</h1>
        <h2 className="text-4xl text-gray-300">
          Estimate with your teammates for FREE
        </h2>
      </header>
      <div className="flex justify-center items-center mt-7">
        <div className="bg-transparent border-b border-white">
          <input
            className="bg-transparent border-none border-teal-500 text-gray-100 py-2 focus:outline-none"
            type="text"
            value={nickname}
            onChange={onChangeNickname}
            placeholder="Nickname"
          />
          <button onClick={onClickNickname} className="ml-3 bg-sky_blue_100">
            Set
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-10">
        <button onClick={connectWs} className="bg-cyan-200">
          Create Session
        </button>
        <button className="bg-blue-400">Join Session</button>
      </div>
    </div>
  );
};

export { Login };
