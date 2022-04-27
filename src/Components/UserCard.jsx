import React, { useState } from "react";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import { ReactComponent as More } from "../icons/expand_more.svg";
import { ReactComponent as Less } from "../icons/expand_less.svg";
const UserCard = ({ user, index }) => {
  const [showing, setShowing] = useState(null);

  function toggle(index) {
    if (showing == index) {
      return setShowing(null);
    }
    setShowing(index);
  }

  return (
    <div className="relative flex">
      <UserIcon width={50} height={50} />
      <div>
        <h1 className="font-semibold text-[12px] text-[#4A4A4A]">
          {user.firstName + " " + user.lastName}
        </h1>
        <h2 className="text-[10px] text-[#4A4A4A]">{user.role}</h2>
        <h3 className="text-[10px]  ">
          <a
            className=" text-[#7E7E7E] hover:text-blue-700"
            href={`mailto:${user.email}`}
          >
            {user.email}
          </a>
        </h3>
      </div>

      {showing !== user.id ? (
        <More fill="#7E7E7E" onClick={() => toggle(index)} />
      ) : (
        <Less fill="#7E7E7E" onClick={() => toggle(index)} />
      )}
    </div>
  );
};

export default UserCard;
