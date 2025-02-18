import React, { useState } from "react";
import Dashboard from "./Dashboard";
import LoginForm from "./LoginForm";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div>
      <button onClick={updateLoginStatus}>Toggle Login Status</button>
      {
        isLoggedIn ? <Dashboard /> : <LoginForm />
      }
    </div>
  )
}

export default ConditionalRendering;