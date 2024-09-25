import { useState } from "react";
import { io } from "socket.io-client";

const Session = () => {
  const client = io();
  const [socketId, setSocketId] = useState("");
  client.on("connect", () => {
    setSocketId(client.id ?? "");
  });

  console.log("Socket ID", socketId);
  return (
    <>
      <div>
        <h1>{socketId}</h1>
      </div>
    </>
  );
};

export { Session };
