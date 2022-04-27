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
    <div className="relative flex shadow-lg  bg-white mt-4 mx-3 h-20 justify-start  ">
      <UserIcon width={50} height={50} className="mt-4" />

      <div className="mt-4 ml-3">
        <h1 className="font-semibold text-[12px] text-[#4A4A4A]">
          {user.firstName + " " + user.lastName}
        </h1>
        <h2 className="text-[10px] text-[#4A4A4A]">{user.role}</h2>
        <h3 className="text-[10px]  ">
          <a
            className=" text-[#7E7E7E] hover:text-blue-700 visited:text-[#7E7E7E]"
            href={`mailto:${user.email}`}
          >
            {user.email}
          </a>
        </h3>
      </div>

      {showing !== user.id ? (
        <More
          fill="#7E7E7E"
          onClick={() => toggle(index)}
          className="mt-7 absolute right-5"
        />
      ) : (
        <Less
          fill="#7E7E7E"
          className="mt-7 absolute right-5"
          onClick={() => toggle(index)}
        />
      )}
    </div>
  );
};

export default UserCard;
