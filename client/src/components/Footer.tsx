import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.25] justify-center items-center">
          <Image
            src="/Designer-removebg.png"
            alt="logo"
            className=""
            width={50}
            height={50}
          />
        </div>

        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            {/* Market */}
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            {/* Artist */}
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            {/* Features */}
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            {/* Community */}
          </p>
        </div>

        <div className="flex flex-[0.25] justify-center items-center">
          <p className="text-white text-right text-xs">
            &copy;{new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
