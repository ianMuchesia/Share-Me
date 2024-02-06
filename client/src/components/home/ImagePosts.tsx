import { useGetPostsQuery } from "@/store/services/postApi"
import ImagePostsCard from "./ImagePostsCard"

const ImagePosts = () => {

  const {data,isLoading,error} = useGetPostsQuery(undefined)
  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
      {
        isLoading && <div className="w-4/5 py-10 mx-auto">
          <h1 className="text-2xl text-white text-center">Loading...</h1>
          </div>
      }
   {data && <div className="w-4/5 py-10 mx-auto">
      <h4 className="text-white text-3xl font-bold uppercase text-gradient">
         Latest Images
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
   
        {
           data.map((post) => (
              <ImagePostsCard key={post.id} post={post}/>
            ))
        }
      </div>

     
       
 
    </div>}
  </div>
  )
}

export default ImagePosts