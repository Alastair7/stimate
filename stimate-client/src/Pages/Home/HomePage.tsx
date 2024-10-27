import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsernameForm } from "../../Features/UsernameForm/UsernameForm";
import {
  CreateSession,
  getSessionUsername,
  hasSessionUsername,
} from "./domain";
import "./homepage.css";
const HomePage = () => {
  const [showUsernameForm, setShowUsernameForm] = useState(hasSessionUsername);
  const nickname = showUsernameForm ? "Stranger" : getSessionUsername() ?? "";
  const nav = useNavigate();

  return (
    <div>
      {showUsernameForm ? (
        <UsernameForm setShowUsernameForm={setShowUsernameForm} />
      ) : null}

      <div className="homepage_header__wrapper">
        <h1>STIMATE</h1>
        <h2>Hello, {nickname}! Are you ready to estimate?</h2>
      </div>

      <div className="homepage_buttons__wrapper">
        <Button type="primary" onClick={() => CreateSession(nav)}>
          Create Session
        </Button>
        <Button>Join Session</Button>
      </div>
    </div>
  );
};

export { HomePage };
