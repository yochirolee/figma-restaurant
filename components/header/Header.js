import HeaderSearch from "./headerSearch/HeaderSearch";
import UserInfo from "./userInfo/UserInfo";

export default function Header({handleSideBarToggle,sideBarToggle}) {
  return (
    <header class="header  bg-white shadow py-4 px-4 ">
      <div class="header-content flex items-center flex-row">
        <HeaderSearch handleSideBarToggle={handleSideBarToggle} sideBarToggle={sideBarToggle} />
        <UserInfo />
      </div>
    </header>
  );
}
