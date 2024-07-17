import React from "react";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
// import btn from "../../assets/auth/btn_normal.png";
const GoogleSignIn = () => {
  return (
    <button
      onClick={async () => {
        await Auth.federatedSignIn({
          provider: CognitoHostedUIIdentityProvider.Google,
        });
      }}
    >
      {/* <img
        src={btn}
        alt="Google Sign In button"
        className="googleSignIn"
        style={{ height: "45px", width: "190px" }}
      /> */}
      Google Signin
    </button>
  );
};
export default GoogleSignIn;
