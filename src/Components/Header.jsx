import React from "react";
import { ReactComponent as Group } from "../icons/group.svg";
const Header = () => {
  return (
    <div className="flex justify-center items-center h-[64px] shadow-lg bg-white">
      <Group className="mr-1" />{" "}
      <h1 className="uppercase text-lg text-[#4A4A4A]"> Users</h1>
    </div>
  );
};

export default Header;
