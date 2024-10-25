import { useState } from "react";
import { UsernameForm } from "../../Features/UsernameForm/UsernameForm";
import { hasSessionUsername } from "./domain";

const HomePage = () => {
  const [showUsernameForm] = useState(hasSessionUsername);
  console.log("HasSessionUsername", showUsernameForm);
  return <div>{showUsernameForm ? <UsernameForm /> : null}</div>;
};

export { HomePage };
