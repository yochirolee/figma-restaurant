import Layout from "../templates/layout";
import Link from "next/link";
import FRestaurant from "./fRestaurant";
export default function Home() {
  /* return (
    <Layout>
      <div className="login-container w-full h-screen grid place-items-center bg-gray-700 ">
        <form className="login-form  h-2/4  bg-white rounded-lg flex flex-col justify-center w-3/4 md:w-2/6 ">
          <div className="form-control flex flex-col  w-3/4 mx-auto">
            <label className="mr-2 my-1">Email</label>
            <input
              type="text"
              className="border border-gray-500 rounded-md h-8 pl-8 py-5 z-10 bg-transparent "
            ></input>
            <div>
              <i className="las la-user  relative -top-8 left-2 text-xl"></i>
              <span className="text-red-400 text-sm ">
                Please Enter a Valid Email
              </span>
            </div>
          </div>
          <div className="form-control  flex flex-col justify-between m-2 my-4  w-3/4 mx-auto">
            <label className="mr-2  my-1">Password</label>
            <input
              type="password"
              className="border border-gray-500 rounded-md h-8 pl-8 py-5 z-10 bg-transparent "
            ></input>
            <div>
              <i className="las la-lock  relative -top-8 left-2  text-xl"></i>
              <span className="text-red-400 text-sm  ">
                Please Enter a Valid Password
              </span>
            </div>
          </div>
          <Link href="dashboard">
            <button className=" self-center rounded-lg bg-gray-700 py-2 text-white  w-3/4">
              Log In
            </button>
          </Link>
        </form>
      </div>
    </Layout>
  );
  */

  return (
    <div>
      <FRestaurant />
    </div>
  );
}
