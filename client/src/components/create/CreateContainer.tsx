import { GeneratedPost } from "@/UI"
import CreateForm from "./CreateForm"

const CreateContainer = () => {
  return (
   
    <div className="  gradient-bg-artworks">
    <div
   className={`w-[100%] h-screen flex justify-center items-center  bg-black bg-opacity-50 `}
 >
   <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl  p-6 w-[90%] md:w-[60%]">
     <CreateForm/>
     <GeneratedPost/>
   </div>
   </div>
   </div>
  )
}

export default CreateContainer