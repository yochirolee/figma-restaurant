import RestaurantSelect from "../components/ui/menus/restaurantSelect/restaurantSelect";
import Layout from "../templates/layout";

export default function FRestaurant() {
  return (
    <Layout>
      <div className="flex flex-col w-full   ">
        <header className=" h-16 mb-4 grid grid-flow-col md:grid-cols-3	grid-auto-column  justify-between mx-4 items-center border-b">
          <i className="las la-bars text-3xl col-span-1"></i>
          <RestaurantSelect />
          <div className="flex items-center justify-end">
            <div className="search hidden md:flex ">
              <div className="relative  flex   place-items-center align-middle ">
                <input
                  className=" mx-4 h-10   border  rounded-3xl pl-4 pr-10 outline-white "
                  placeholder="Buscar"
                ></input>
                <i className="las la-search absolute right-6 text-2xl text-gray-400 transform -rotate-90"></i>
              </div>
              <div className="relative mr-3">
                <div className="absolute flex right-0 top-0 w-6 h-6 text-center  text-white rounded-full bg-red-400 z-10 ">
                  <span className="text-sm m-auto ">1</span>
                </div>
                <i className="las la-shopping-cart    right-4 text-5xl text-gray-400 "></i>
              </div>
            </div>
            <div className=" text-3xl ring-1 ring-gray-300 rounded-full  w-10 h-10">
              <img
                src="./profile.jpg"
                alt="profile"
                className="w-10 h-10 rounded-full object-scale-down"
              ></img>
            </div>
          </div>
        </header>
        <div className="search flex mx-auto md:hidden ">
          <div className="relative  flex   place-items-center align-middle ">
            <input
              className=" mx-4 h-10   border  rounded-3xl pl-4 pr-10 outline-white "
              placeholder="Buscar"
            ></input>
            <i className="las la-search absolute right-6 text-2xl text-gray-400 transform -rotate-90"></i>
          </div>
          <div className="relative ">
            <div className="absolute flex right-0 top-0 w-6 h-6 text-center  text-white rounded-full bg-red-400 z-10 ">
              <span className="text-sm m-auto ">1</span>
            </div>
            <i className="las la-shopping-cart right-4 text-5xl text-gray-400 "></i>
          </div>
        </div>

        <section className="product-menu  mx-6 mt-4">
          <nav className="flex flex-row justify-evenly  h-14 items-center   rounded-xl">
            <i className="las la-pizza-slice  text-2xl   text-red-400 transform hover:scale-150"></i>
            <i className="las la-coffee text-2xl text-red-400 transform hover:scale-150"></i>
            <i className="las la-hamburger  text-2xl text-red-400 transform hover:scale-150"></i>
            <i className="las la-hotdog  text-2xl text-red-400 transform hover:scale-150"></i>
          </nav>
        </section>

        <section className="recomendados  mt-2">
          <div className="flex flex-col">
            <h3 className="ml-4 my-2 font-bold text-gray-500">Recomendados</h3>
            <div className="cards flex flex-row flex-nowrap w-full justify-between ">
              <div className="card flex flex-col items-center bg-gray-50 drop-shadow-sm rounded-2xl mx-2 w-2/4 h-60">
                <img src="pizza.svg" className="h-36 object-scale-down  "></img>
                <h3 className="card-name mx-auto text-gray-500">
                  Pizza de Vegetales
                </h3>
                <h3 className="card-name mx-auto">$ 9.99</h3>
              </div>
              <div className="card bg-gray-100 rounded-2xl mx-2 w-2/4 h-60"></div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
