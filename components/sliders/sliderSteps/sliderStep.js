export default function SliderStep({ content }) {
  return (
    <div
      className="slider min-w-full   flex flex-col justify-center  bg-contain   lg:bg-cover  bg-no-repeat "
      style={{
        backgroundImage: `url(${content.picture})`,
        repeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col bg-white lg:bg-transparent p-4 lg:justify-around h-44  lg:h-3/5 lg:w-2/5 lg:mt-20 lg:ml-28  w-11/12 mx-auto lg:border-none shadow-lg lg:shadow-none  ">
        <h2 className="font-bold text-gray-900 lg:text-white  lg:font-bold lg:text-5xl text-2xl">
          {content.title}
        </h2>
        <h4 className="lg:text-white text-gray-900 lg:font-bold lg:text-xl pt-4 h-10">
          {content.description}
        </h4>
        <button className=" text-white lg:font-bold   lg:p-2 lg:w-44 w-24 h-10 lg:h-12 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-md lg:rounded-lg mt-10">
          {content.buttonText}
        </button>
      </div>
    </div>
  );
}
