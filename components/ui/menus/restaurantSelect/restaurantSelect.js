import { useState } from "react";

export default function RestaurantSelect() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" flex flex-col relative text-red-400 text-center ">
      <div className="logo  text-2xl font-bold cursor-pointer ">
        <span>Restaurant App</span>
        <i
          onClick={() => setToggle(!toggle)}
          className="las la-angle-down ml-4 text-xl transition ease-in duration-700 transform hover:-translate-y-1 hover:scale-110"
        ></i>
      </div>
      <div
        className={`absolute bg-red-400 text-white top-12 w-full p-2 z-20 cursor-pointer   border border-red-400 rounded-xl ${
          !toggle ? "hidden" : "flex flex-col"
        }`}
      >
        <div className="p-2 flex justify-evenly">
          <div className="restaurant-logo">
            <i className="las la-pizza-slice"></i>
          </div>
          <a>Other Restaurant</a>
        </div>
        <div className="p-2 flex justify-evenly">
          <div className="restaurant-logo">
            <i className="las la-pizza-slice"></i>
          </div>
          <a>Other Restaurant</a>
        </div>
        <div className="p-2 flex justify-evenly">
          <div className="restaurant-logo">
            <i className="las la-pizza-slice"></i>
          </div>
          <a>Other Restaurant</a>
        </div>
      </div>
    </div>
  );
}
