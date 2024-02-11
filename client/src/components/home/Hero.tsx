import Image from "next/image";
import { useRouter } from "next/router";
import { FaRobot } from "react-icons/fa6";

const Hero = () => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
        items-center mx-auto py-10"
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-white text-4xl font-bold">
            Prompt and Generate <br /> Digital Arts, <br />
            <span className="text-gradient">AI images</span> Collections
          </h1>
          <p className="text-gray-500 font-semibold text-sm mt-3">
            Prompt and share your photo right now
          </p>
        </div>

        <div className="flex flex-row mt-5">
          <button
            className="shadow-xl shadow-black text-white
              bg-[#e32970] hover:bg-[#bd255f]
              rounded-full cursor-pointer py-2 px-5"
            onClick={() => router.push("/create")}
          >
            Start Now
          </button>
        </div>
      </div>

      <div
        className="shadow-xl shadow-black md:w-2/5 w-full 
        mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800"
      >
        <Image
          src="/Designer.png"
          alt="NFT Art"
          className="h-60 w-full object-cover"
          height={300}
          width={300}
        />
        <div className="flex justify-start items-center p-3">
          <FaRobot
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3 text-[#e32970]"
          />

          <div>
            <p className="text-white font-semibold">
              {"Signup to start creating your AI images"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
