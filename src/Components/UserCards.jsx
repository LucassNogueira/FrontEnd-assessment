import React from "react";
import userData from "../Data/users.json";
import UserCard from "./UserCard";
const UserCards = () => {
  return (
    <div>
      {userData.map((user, index) => (
        <UserCard index={index} key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserCards;
