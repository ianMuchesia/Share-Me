

interface UploadImageProps{
    changeImage: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    imgBase64: string | null;
}
const UploadImage = (props:UploadImageProps) => {
  return (
    <>
     <div className="flex flex-row justify-start items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-36 w-36 ">
              <img
                alt="NFT"
                className="h-full w-full object-cover cursor-pointer"
                src={
                  props.imgBase64 ||
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                }
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
                onChange={props.changeImage}
              
              />
            </label>
    
          </div>
          </>
  )
}

export default UploadImage