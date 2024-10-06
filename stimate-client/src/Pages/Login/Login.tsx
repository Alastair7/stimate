import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/button/Button";
import { NicknameInput } from "./NicknameInput";

const Login = () => {
  const nav = useNavigate();
  const [room, setRoom] = useState<string>("");
  console.log("Room", room);
  return (
    <div className="min-h-screen bg-dark_space">
      <header className="flex flex-col items-center gap-3 mb-20">
        <h1 className="text-6xl text-gray-200">Stimate</h1>
        <h2 className="text-2xl p-1 text-gray-300 text-center">
          Estimate with your teammates for FREE
        </h2>
      </header>
      <NicknameInput />
      <input
        className="bg-transparent border-none border-teal-500 text-gray-100 py-2 focus:outline-none"
        type="text"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        placeholder="RoomCode"
      />
      <div className="flex justify-center items-center gap-2 mt-16">
        <Button onClick={() => nav("sessions")} text="Create Session" />
        <Button text="Join Session" />
      </div>
    </div>
  );
};

export { Login };
