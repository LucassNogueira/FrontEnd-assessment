import React from "react";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import { ReactComponent as More } from "../icons/expand_more.svg";
import { ReactComponent as Less } from "../icons/expand_less.svg";
import moment from "moment";
const UserCard = ({ user, index, showing, toggle }) => {
  function roleFill(role) {
    if (role === "Administrator") {
      return "#2081C3";
    } else if (role === "User") {
      return "#68AAAB";
    } else if (role === "Viewer") {
      return "#7E7E7E";
    } else {
      return "#000000";
    }
  }
  function formatPhone(str) {
    //looking at .json no edge cases all numbers have no whitespace or need to be trimmed
    let first = str.slice(0, 3);
    let second = str.slice(3, 6);
    let third = str.slice(6, 9);
    return `(${first}) ${second}-${third} `;
  }
  return (
    <div
      onClick={() => toggle(index, console.log(index))}
      className={`relative flex shadow-lg  bg-white  mt-4 mx-3 pb-4 pt-4`}
    >
      <UserIcon width={50} height={50} fill={roleFill(user.role)} />

      <div className="flex flex-col just ml-3">
        <h1 className="font-semibold text-[12px] text-[#4A4A4A]">
          {user.firstName + " " + user.lastName}
        </h1>
        <h2 className="text-[10px] text-[#4A4A4A]">{user.role}</h2>
        <p className="text-[10px]  ">
          <a
            className=" text-[#7E7E7E] hover:text-blue-700 visited:text-[#7E7E7E]"
            href={`mailto:${user.email}`}
          >
            {user.email}
          </a>
        </p>
        {showing === user.id ? (
          <div className="h-[190px] w-[200px] ">
            <h3 className="text-[10px] font-semibold text-[#4A4A4A] mt-4">
              Address
            </h3>
            <p className="text-[10px] text-[#4A4A4A]">{`${user.street}, ${user.city}, ${user.state} ${user.zip}`}</p>
            <h3 className="text-[10px] font-semibold text-[#4A4A4A] mt-4">
              Phone
            </h3>
            <p className="text-[10px] text-[#4A4A4A]">
              {formatPhone(user.phone)}
            </p>
            <h3 className="text-[10px] font-semibold text-[#4A4A4A] mt-4">
              Created At
            </h3>
            <p className="text-[10px] text-[#4A4A4A]">
              {moment(user.createdAt).format("M/D/YY h:mm A")}
            </p>
            <h3 className="text-[10px] font-semibold text-[#4A4A4A] mt-4">
              Last Logged In
            </h3>
            <p className="text-[10px] text-[#4A4A4A]">
              {moment(user.lastLoggedIn).format("M/D/YY h:mm A")}
            </p>
          </div>
        ) : null}
      </div>

      {showing !== user.id ? (
        <More fill="#7E7E7E" className=" absolute right-5 top-7" />
      ) : (
        <Less fill="#7E7E7E" className="absolute right-5 top-7" />
      )}
    </div>
  );
};

export default UserCard;
