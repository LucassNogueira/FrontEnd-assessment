import React from "react";
import userSvg from "../icons/group.svg";
const Header = () => {
  return (
    <div className="flex justify-center items-center h-[64px] shadow-lg">
      <img src={userSvg} alt="groupUsers" className="h-[28px]" />
      <h1 className="uppercase text-lg text-[#4A4A4A]">Users</h1>
    </div>
  );
};

export default Header;
