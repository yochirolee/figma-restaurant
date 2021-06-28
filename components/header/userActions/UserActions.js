import Link from "next/link";
export default function UserActions({ toggle }) {
  return (
    <>
      {!toggle ? (
        <></>
      ) : (
        <div className="user-actions relative border top-4 rounded-md  bg-white ">
          <div class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="flex items-center justify-center text-lg text-gray-400">
                <i className="las la-user text-2xl"></i>
              </span>
              <span class="ml-3">Profile</span>
            </a>
            <Link href="/">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span class="flex items-center justify-center text-lg text-gray-400">
                  <i className="las la-sign-out-alt text-2xl"></i>
                </span>

                <span class="ml-3">Logout</span>
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
