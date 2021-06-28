import Layout from "../templates/layout";

export default function FRestaurant() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <header className=" h-20 flex justify-between mx-4 place-items-center">
          <i className="las la-bars text-3xl"></i>
          <div className="logo text-red-400 text-2xl font-bold ">
            Restaurant App
          </div>
          <i className="las la-user  text-3xl"></i>
        </header>
        <div className="search relative  flex place-items-center w-full   ">
          <input
            className="w-3/4 mx-auto h-12  border text-xl rounded-3xl pl-4 pr-10 outline-white "
            placeholder="Buscar"
          ></input>
          <i className="las la-search absolute right-14 text-2xl text-gray-300 transform -rotate-90"></i>
        </div>

        <section className="recomendados  mt-2">
          <div className="flex flex-col">
            <h3 className="ml-4 my-2 font-bold text-gray-500">Recomendados</h3>
            <div className="cards flex flex-row flex-nowrap w-full justify-between ">
              <div className="card bg-gray-100 drop-shadow-sm rounded-2xl mx-2 w-2/4 h-60"></div>
              <div className="card bg-gray-100 rounded-2xl mx-2 w-2/4 h-60"></div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
