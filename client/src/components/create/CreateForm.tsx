import { CreatePostType } from '@/@types/post';
import { closeModal, openModal } from '@/store/features/modalSlice';
import { useAppDispatch } from '@/store/hooks';
import { useCreatePostMutation } from '@/store/services/postApi';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CreateForm = () => {

  const dispatch = useAppDispatch()

  const router = useRouter()

  const [handlePost, { isLoading}] = useCreatePostMutation()



  const {register,handleSubmit,formState:{errors},reset} = useForm<CreatePostType>({
    defaultValues:{
      title: '',
      prompt: '',
      token: ''
    }
  })


  const onSubmit = async(data:CreatePostType) => {
    try {
      const response = await handlePost(data).unwrap()

      dispatch(openModal({name:"generate",data:response}))
      setTimeout(()=>{
        dispatch(closeModal())
        router.push("/")

      },2000)
      
    } catch (error) {
      console.error(error)
      toast.error("An error occured")
    }
  }
  
  

  
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-10 justify-between items-center">
            <p className="font-semibold text-gray-400 text-2xl">Generate Image</p>
       
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
                {...register('title',{required:true})}

              type="text"
              name="title"
              placeholder="Title"
              // onChange={(e) => setTitle(e.target.value)}
              // value={title}
              required
            />
           {errors.title && <p className="text-red-500 text-xs">Title is required</p>}
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
            {errors.prompt && <p className="text-red-500 text-xs">Prompt is required</p>}
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