import UserActions from "../userActions/UserActions";
import { useState, useRef } from "react";

export default function UserInfo() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className=" ml-auto absolute right-2 top-4 cursor-pointer"
      onClick={handleToggle}
    >
      <a href className="flex flex-row items-center ">
        <img
          src="avatar.png"
          alt
          class="h-10 w-10 bg-gray-200 border rounded-full ring-2 ring-gray-400"
        />
        <span className="flex flex-col ml-2">
          <span className="truncate w-20 font-semibold tracking-wide leading-none">
            John Doe
          </span>
          <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">
            Manager
          </span>
        </span>
      </a>
      <UserActions toggle={toggle} />
    </div>
  );
}
