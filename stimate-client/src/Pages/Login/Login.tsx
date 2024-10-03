import { useCallback, useEffect, useState } from "react";
import Button from "../../shared/components/button/Button";
import { navToSessions, setUsername } from "./domain";

const Login = () => {
  const [nickname, setNickname] = useState<string>("");
  const onChangeNickname = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(event.currentTarget.value);
    },
    [nickname]
  );

  const onClickSetNickname = () => setUsername(nickname);

  useEffect(() => {
    const value = sessionStorage.getItem("nickname");
    setNickname(value ?? "");
  }, []);

  return (
    <div className="min-h-screen bg-dark_space">
      <header className="flex flex-col items-center gap-3 mb-20">
        <h1 className="text-6xl text-gray-200">Stimate</h1>
        <h2 className="text-2xl p-1 text-gray-300 text-center">
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
          <button onClick={onClickSetNickname} className="ml-3 bg-sky_blue_100">
            Set
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-16">
        <Button onClick={navToSessions} text="Create Session" />
        <Button text="Join Session" />
      </div>
    </div>
  );
};

export { Login };
