import React from "react";
import { Auth } from "aws-amplify";

const App = () => {
  const signInWithGoogle = () => {
    Auth.federatedSignIn({ provider: "Google" });
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default App;
