import Image from "next/image";
import { useState } from "react";

interface UploadImageProps {
  fileUpload: File | null;
  setFileUpload: (value: File) => void;
}

const UploadImage = (props: UploadImageProps) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const changeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      props.setFileUpload(file);
      setFileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="flex flex-row justify-start items-center rounded-xl mt-5">
        <div className="shrink-0 rounded-xl overflow-hidden h-36 w-36 ">
          <Image
            alt="NFT"
            className="h-full w-full object-cover"
            src={fileUrl || "/user.png"}
            width={144}
            height={144}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5 mb-5">
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg, image/webp"
            className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#19212c] file:text-gray-400
                  hover:file:bg-[#1d2631]
                  cursor-pointer focus:ring-0 focus:outline-none"
            onChange={changeImage}
          />
        </label>
      </div>
    </>
  );
};

export default UploadImage;
