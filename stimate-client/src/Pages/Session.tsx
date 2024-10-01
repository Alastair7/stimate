import { useState } from "react";
import { socket } from "../shared/ws-client/wsClient";

const Session = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  socket.connect();

  function onConnect() {
    console.log("Client Connected");
    setIsConnected(true);
  }

  socket.on("connect", onConnect);

  return (
    <>
      <p>{isConnected ? socket.id : "Client Not Connected"}</p>
    </>
  );
};

export { Session };
