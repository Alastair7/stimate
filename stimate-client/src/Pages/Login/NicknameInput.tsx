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
    <div>
      <div>
        <input
          type="text"
          value={nickname}
          onChange={onChangeNickname}
          placeholder="Nickname"
        />
        <Button onClick={onClickSetNickname} text={"Set"} />
      </div>
    </div>
  );
};
