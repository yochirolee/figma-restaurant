import SideBarItems from "./SideBarItems";

export default function SideBar({ sideBarToggle, handleSideBarToggle }) {
  return (
    <aside
      class={`sidebar  w-64 md:shadow transition-transform duration-150 ease-in z-10 bg-gray-700 ${
        sideBarToggle ? "transform -translate-x-full md:translate-x-0 " : ""
      } `}
    >
      <div class="sidebar-header flex md:justify-center md:items-center items-end justify-end py-2 md:py-4">
        <div class="inline-flex">
          <a href="#" className="inline-flex flex-row items-center">
            <i className="las la-church hidden md:flex text-3xl text-red-400"></i>
            <span class="hidden md:flex leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">
              Brandname
            </span>
          </a>
        </div>
        <i
          className="las la-times-circle text-3xl mr-2 md:hidden cursor-pointer text-white  rounded-full  self-end "
          onClick={handleSideBarToggle}
        ></i>
      </div>
      
       <SideBarItems/>
      
    </aside>
  );
}
