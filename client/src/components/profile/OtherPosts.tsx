import React from 'react'
import OtherPostsCard from './OtherPostsCard'
import { PostType } from '@/@types/post'

interface Props{
  posts:PostType[];
}
const OtherPosts = ({posts}:Props) => {
  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
    <div className="w-4/5 py-10 mx-auto">
      <h4 className="text-white text-3xl font-bold uppercase text-gradient text-center">
         Other Posts
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
   
        {
           posts.map((post) => (
              <OtherPostsCard key={post.id} post={post} />
            ))
        }
      </div>

     
       
 
    </div>
  </div>
  )
}

export default OtherPosts