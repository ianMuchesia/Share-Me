import Image from 'next/image';

const CreateForm = () => {

  
  return (
    <form className="flex flex-col">
      <div className="flex flex-row gap-10 justify-between items-center">
            <p className="font-semibold text-gray-400 text-2xl">Generate Image</p>
            {/* <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-gray-400" />
            </button> */}
          </div>

          <div className="flex flex-row justify-start items-center rounded-xl mt-5">
            <div className=" relative shrink-0 rounded-xl overflow-hidden h-36 w-36 ">
              {/* <img
                alt="NFT"
                className="h-full w-full object-cover cursor-pointer"
                src={
                  imgBase64 ||
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                }
              /> */}
         
              <Image
                src="/preview.png"
                alt="preview"
               className="h-full w-full object-cover cursor-pointer opacity-40"
               width={144}
                height={144}
              />
            
 {/*
            {generatingImg && (              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
           )} */}
            </div>
          </div>


          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="text"
              name="title"
              placeholder="Title"
              // onChange={(e) => setTitle(e.target.value)}
              // value={title}
              required
            />
          </div>

         

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              className="block w-full text-sm resize-none
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 h-20"
             
              name="description"
              placeholder="Write your prompt here..."
              // onChange={(e) => setDescription(e.target.value)}
              // value={description}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            // onClick={handleSubmit}
            className="flex flex-row justify-center items-center
              w-full text-white text-md bg-[#e32970]
              hover:bg-[#bd255f] py-2 px-5 rounded-full
              drop-shadow-xl border border-transparent
              hover:bg-transparent hover:text-[#e32970]
              hover:border hover:border-[#bd255f]
              focus:outline-none focus:ring mt-5"
          >
            Create
          </button>
</form>
  )
}

export default CreateForm