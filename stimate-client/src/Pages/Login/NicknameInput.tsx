import { useCallback, useEffect, useState } from "react";
import Button from "../../shared/components/button/Button";
import { setUsername } from "./domain";

export const NicknameInput = () => {
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
    <div className="flex justify-center items-center mt-7">
      <div className="bg-transparent border-b border-white">
        <input
          className="bg-transparent border-none border-teal-500 text-gray-100 py-2 focus:outline-none"
          type="text"
          value={nickname}
          onChange={onChangeNickname}
          placeholder="Nickname"
        />
        <Button
          onClick={onClickSetNickname}
          className="ml-3 p-1 rounded-md bg-sky_blue_100 font-semibold"
          text={"Set"}
        />
      </div>
    </div>
  );
};
