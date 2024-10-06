import { useEffect, useState } from "react";
import { socket } from "../../shared/ws-client/wsClient";
import { User } from "./User";

const Session = () => {
  const [roomID, setRoomID] = useState<string>("");
  const [users, setUsers] = useState<string[]>([]);

  function onConnect() {
    console.log("Client Connected");
    users.push("User");
  }

  function onRoomCreated(arg: string) {
    console.log("Socket Room:", arg);
    setRoomID(arg);
  }

  console.log("Users", users);
  useEffect(() => {
    setUsers(users);
  }, [users]);

  const renderUsers = users.map(() => <User />);
  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
      socket.emit("roomCreation");

      socket.on("connect", onConnect);
      socket.on("roomCreated", onRoomCreated);
    }
  }, []);

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
