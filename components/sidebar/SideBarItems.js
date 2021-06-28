export default function SideBarItems() {
  return (
    <div className="sidebar-content px-4 py-6">
      <ul class="flex flex-col w-full">
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
          >
            <span class="flex items-center justify-center text-lg text-gray-400">
              <i className="las la-home text-2xl"></i>
            </span>
            <span class="ml-3">Dashboard</span>
          </a>
        </li>
        <li class="my-px">
          <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">
            Projects
          </span>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="flex items-center justify-center text-lg text-gray-400">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </span>
            <span class="ml-3">Manager</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="flex items-center justify-center text-lg text-gray-400">
              <i className="las la-tasks text-2xl"></i>
            </span>
            <span class="ml-3">Tasks</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="flex items-center justify-center text-lg text-gray-400">
              <i className="las la-users text-2xl"></i>
            </span>
            <span class="ml-3">Clients</span>
            <span class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto">
              1k
            </span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="flex items-center justify-center text-lg text-green-400">
              <i className="las la-plus-circle text-2xl"></i>
            </span>
            <span class="ml-3">Add new</span>
          </a>
        </li>
        <li class="my-px">
          <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">
            Account
          </span>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="flex items-center justify-center text-lg text-gray-400">
              <i className="las la-user text-2xl"></i>
            </span>
            <span class="ml-3">Profile</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="flex items-center justify-center text-lg text-gray-400">
              <i className="las la-bell text-2xl"></i>
            </span>
            <span class="ml-3">Notifications</span>
            <span class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto">
              10
            </span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="flex items-center justify-center text-lg text-gray-400">
              <i className="las la-cog text-2xl"></i>
            </span>
            <span class="ml-3">Settings</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="flex items-center justify-center text-lg text-red-400">
              <i className="las la-sign-out-alt text-2xl"></i>
            </span>
            <span class="ml-3">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
