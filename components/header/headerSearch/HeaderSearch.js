export default function HeaderSearch({handleSideBarToggle,sideBarToggle}){
    return(
        <form action="#">
          <div class="hidden md:flex relative">
            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <i className="las la-search text-2xl"></i>
            </div>

            <input
              id="search"
              type="text"
              name="search"
              class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
              placeholder="Search..."
            />
          </div>
          <div class="flex md:hidden">
            <a
              href="#"
              class="flex items-center justify-center h-10 w-10 border-transparent"
            >
             {

             }
              <i className="las la-bars text-2xl" onClick={handleSideBarToggle}></i>
            </a>
          </div>
        </form>
    )
}