import { useEffect } from "react";
import { socket } from "../../shared/ws-client/wsClient";
import { User } from "./User";

const Session = () => {
  const renderUsers = users.map(() => <User />);
  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
      roomCode
        ? socket.emit("roomJoin", roomCode)
        : socket.emit("roomCreation");

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
