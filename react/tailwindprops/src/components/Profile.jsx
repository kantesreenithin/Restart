import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user ? <h1>Profile:{user.username}</h1> : <h1>Not Loggin In</h1>}
    </div>
  );
}

export default Profile;
