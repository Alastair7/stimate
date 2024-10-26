import { useState } from "react";
import { UsernameForm } from "../../Features/UsernameForm/UsernameForm";
import { getSessionUsername, hasSessionUsername } from "./domain";

const HomePage = () => {
  const [showUsernameForm, setShowUsernameForm] = useState(hasSessionUsername);
  const nickname = showUsernameForm ? "" : getSessionUsername() ?? "";

  return (
    <div>
      {showUsernameForm ? (
        <UsernameForm setShowUsernameForm={setShowUsernameForm} />
      ) : null}

      <h1>Hello, {nickname}</h1>
    </div>
  );
};

export { HomePage };
