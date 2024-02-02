import ProfilesCard from "./ProfilesCard"

const Profiles = () => {
  return (
    <div className="bg-[#151c25]">
    <div className="w-4/5 py-10 mx-auto">
      <h4 className="text-white text-3xl font-bold uppercase text-gradient">
      View Profiles
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-2 py-2.5">
        { Array.from({length: 10}).map((_, i) => (
          <ProfilesCard key={i} />
        ))}
      </div>

      
       
    
    </div>
  </div>
  )
}

export default Profiles