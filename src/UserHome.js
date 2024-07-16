import React from "react";
const UserHome = ({ email }) => {
  return (
    <div center middle height="100vh" width="100%" gap={1}>
      <h3>Hello, {email}.</h3>
      <p>This route is for protected users :~)</p>
    </div>
  );
};
export default UserHome;