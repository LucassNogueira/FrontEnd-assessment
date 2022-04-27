import React, { useState } from "react";
import userData from "../Data/users.json";
import UserCard from "./UserCard";
const UserCards = () => {
  const [showing, setShowing] = useState(null);
  const [open, setOpen] = useState(false);
  function toggle(index) {
    if (showing === index) {
      setOpen(!open);

      return setShowing(null);
    }
    console.log(open);
    setOpen(!open);
    setShowing(index);
  }
  return (
    <div>
      {userData.map((user, index) => (
        <UserCard
          index={index}
          key={user.id}
          user={user}
          showing={showing}
          toggle={toggle}
        />
      ))}
    </div>
  );
};

export default UserCards;
