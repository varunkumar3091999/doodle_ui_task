import Header from "../components/Header";

const Home = () => (
  <div className="overflow-x-hidden">
    <div className="h-screen flex">
      <div className="pl-24 w-4/6">
        {/* Header */}
        <Header />
        {/* Content */}
        <div className="">
          <div className="mt-24">
            <p className="text-7xl text-left font-extrabold text-gray-700 w-3/4">
              Build your brand connecting with Customers
            </p>
            <p className="text-left text-2xl font-extrabold text-gray-500 w-1/2 leading-10 mt-10">
              Fast and Secure messages and elegance interface
            </p>

            <div className="flex mt-10 justify-between relative">
              <div className="flex w-1/2 justify-between">
                <button className=" text-xl font-semibold flex h-16 w-48 justify-center bg-blue-500 text-white rounded-full px-3 py-5 shadow-full ">
                  Get Started{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 bg-gray-300 bg-opacity-25 p-1 rounded-full mx-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>

                <button className="flex items-center px-3 justify-between w-2/5 ">
                  <div className="z-0 h-16 w-16 bg-yellow-600	 absolute -ml-2 rounded-full" />
                  <span className="z-10 shadow  bg-white w-12 h-12 rounded-full flex justify-center items-center absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <p className="w-36 z-5 absolute left bg-white ml-6 h-16 pt-4 font-semibold">
                    Live Demo
                  </p>
                </button>
              </div>

              <div className="mx-auto  absolute right-10 -bottom-16">
                <div className="shadow-2xl w-96 h-12 border  rounded-lg px-2 flex items-center">
                  <img
                    src="https://picsum.photos/100/100?random=1"
                    alt="random"
                    className="h-9 w-9 rounded-full"
                  />
                  <div className="mx-7 my-1">
                    <div className="h-2 w-72 bg-gray-500 rounded-full" />
                    <div className="h-2 w-36 bg-gray-300 rounded-full mt-2" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="shadow-2xl w-72 h-12  rounded-full my-4 px-2  border flex items-center">
                    <img
                      src="https://picsum.photos/100/100?random=2"
                      alt="random"
                      className="h-9 w-9 rounded-full"
                    />
                    <div className="mx-7 my-1">
                      <div className="h-2 w-36 bg-gray-500 rounded-full" />
                      <div className="h-2 w-16 bg-gray-300 rounded-full mt-2" />
                    </div>
                  </div>
                  <div className="h-12 w-12  z-10 right-0 rounded bg-white shadow-2xl p-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-yellow-600 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <div className="h-10 w-16 bg-white shadow-2xl z-0 absolute nanogon  mr-4 mt-0.5" />
                  </div>
                </div>
                <div className="shadow-2xl w-80 h-12  rounded-full my-4 px-2  border flex items-center">
                  <img
                    src="https://picsum.photos/100/100?random=3"
                    alt="random"
                    className="h-9 w-9 rounded-full"
                  />
                  <div className="mx-7 my-1">
                    <div className="h-2 w-48 bg-gray-500 rounded-full" />
                    <div className="h-2 w-24 bg-gray-300 rounded-full mt-2" />
                  </div>
                </div>
              </div>

              {/* png image */}
            </div>
          </div>
        </div>
      </div>

      {/* side image */}
      <div
        style={{
          backgroundImage: `url(${"https://picsum.photos/600/1000?random=1"})`,
        }}
        className="w-2/6 bg-center"
      >
        <div className="py-9 ">
          <button className="flex mx-auto text-white bg-blue-500 px-3 py-3 rounded-full">
            Create Room
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 bg-gray-300 bg-opacity-25 p-1 rounded-full mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* chat bubbles */}
        <div className="relative">
          {/* chat bubble 1 */}
          <div className="z-10 absolute ml-24 w-52">
            <div className="mt-4 w-full z-5">
              <div className="flex flex-col w-4/5 mx-auto">
                <div className="h-0.5 w-2/3  bg-white self-end" />
                <div className="h-0.5 my-1 w-2/3 bg-white" />
              </div>
              <div className="shadow-2xl h-22 bg-white text-gray-900 rounded-xl mx-auto font-bold text-5xl py-3">
                Can I
              </div>
              <div>
                <div className="h-0.5 w-1/3 mt-1 bg-white ml-10" />
              </div>
            </div>

            <div className="w-  flex justify-end">
              <div className="triangle-left absolute -mt-9" />
            </div>
          </div>

          {/* chat bubble 2 */}
          <div className=" absolute right-10 top-0 mt-16">
            <div className="mt-4 w-52 ">
              <div className="flex flex-col w-2/5 ml-auto mr-3">
                <div className="h-0.5 w-2/3 my-1 bg-gray-900  self-end" />
              </div>
              <div className=" shadow-2xl h-20 bg-gray-900  text-white  rounded-xl mx-auto font-black text-4xl py-5">
                Help You
              </div>
              <div>
                <div className="h-0.5 w-2/3 mt-1 bg-gray-900 ml-10" />
              </div>
            </div>

            <div className="w-2/5 flex justify-start">
              <div className="triangle-right absolute -mt-9" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* footer */}
    <div className="h-96 bg-blue-900 flex justify-center items-center px-32">
      <div className="flex w-1/3">
        <div>
          <img
            src="https://picsum.photos/100/100?random=4"
            alt="random"
            className="h-24 w-36 rounded-md"
          />
        </div>
        <div className="mx-3 flex flex-col items-start">
          <p className="text-white text-2xl font-semibold">Video Chats</p>
          <p className="text-white text-left w-3/4">
            Transform the way with you with one place to everyone
          </p>
        </div>
      </div>
      <div className="flex w-1/3">
        <div>
          <img
            src="https://picsum.photos/100/100?random=5"
            alt="random"
            className="h-24 w-36 rounded-md"
          />
        </div>
        <div className="mx-3 flex flex-col items-start">
          <p className="text-white text-2xl font-semibold">Free Membership</p>
          <p className="text-white text-left w-3/4">
            Transform the way with you with one place to everyone
          </p>
        </div>
      </div>
      <div className="flex w-1/3">
        <div>
          <img
            src="https://picsum.photos/100/100?random=6"
            alt="random"
            className="h-24 w-36 rounded-md"
          />
        </div>
        <div className="mx-3 flex flex-col items-start">
          <p className="text-white text-2xl font-semibold">Easy Connections</p>
          <p className="text-white text-left w-3/4">
            Transform the way with you with one place to everyone
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
