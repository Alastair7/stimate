import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { socket } from "../../shared/ws-client/wsClient";
import { User } from "./User";

const Session = () => {
  const [roomID, setRoomID] = useState<string>("");
  const [users, setUsers] = useState<string[]>([]);
  const { state } = useLocation();
  const { roomCode } = state ?? "";

  console.log("RoomCode:", roomCode);

  socket.connect();

  useEffect(() => {
    setUsers(users);
  }, [users]);

  const renderUsers = users.map(() => <User />);

  function onConnect() {
    console.log("Client Connected");
    users.push("User");
  }

  function onRoomCreated(arg: string) {
    console.log("Socket Room:", arg);
    setRoomID(arg);
  }

  function onMessage(message: string) {
    socket.send(message);
  }

  roomCode ? socket.send(roomCode) : null;

  socket.on("connect", onConnect);
  socket.on("roomCreated", onRoomCreated);
  socket.on("message", onMessage);

  return (
    <div className="min-h-screen bg-dark_space">
      <h1 className="text-center font-bold text-lg text-white">
        Session ID: {roomID}
      </h1>
      {renderUsers}
    </div>
  );
};

export { Session };
