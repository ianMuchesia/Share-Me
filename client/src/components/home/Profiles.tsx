import { useGetAllUsersQuery } from "@/store/services/postApi"
import ProfilesCard from "./ProfilesCard"
import LoadingProfile from "@/UI/LoadingProfile"

const Profiles = () => {

  const {data,isLoading,error} = useGetAllUsersQuery()
  return (
    <div className="bg-[#151c25]">
    <div className="w-4/5 py-10 mx-auto">
      <h4 className="text-white text-3xl font-bold uppercase text-gradient">
      View User Profiles
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-2 py-2.5">
      {isLoading &&    Array.from({length: 10}).map((_, i) => (
          <LoadingProfile key={i} />
        ))}
        {data && data.length && data.map((user) => (
          <ProfilesCard key={user.id} user={user} />
        ))}
        

      </div>
      {
        data && !data.length && <p className="text-red-500 text-center">There no profiles to display currently</p>
      }

      
       
    
    </div>
  </div>
  )
}

export default Profiles