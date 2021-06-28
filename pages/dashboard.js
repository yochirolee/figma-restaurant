import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Layout from "../templates/layout";
import Slider from "../components/sliders/slider";

export default function Dashboard() {
  const [sideBarToggle, setSideBarToogle] = useState(true);

  const handleSideBarToggle = () => {
    setSideBarToogle(!sideBarToggle);
  };
  return (
    <Layout>
      <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800 ">
        <SideBar
          sideBarToggle={sideBarToggle}
          handleSideBarToggle={handleSideBarToggle}
        />
        <main class="main flex flex-col w-7/12 flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <Header
            handleSideBarToggle={handleSideBarToggle}
            sideBarToggle={sideBarToggle}
          />
          <div class="main-content  flex flex-col flex-grow p-4   ">
            <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1>

            <div class="flex flex-col h-full  border-4 border-gray-400 border-dashed bg-white rounded mt-4">
              <Slider />
              <div className="cards grid grid-cols-3 gap-6 justify-between mt-10 p-6">
                <div className="card max-w-2/6 border  border-gray-300 rounded-md">
                  <span>Title</span>
                </div>
                
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </Layout>
  );
}
