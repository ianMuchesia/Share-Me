import OtherPosts from "./OtherPosts";
import ProfileCard from "./ProfileCard";


const ProfileContainer = () => {
  
  return (
    <div className="gradient-bg-hero ">
      <div className="profile-page">
        <div className="relative block h-[500px]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(./Designer.png)`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-80 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
            style={{ transform: "translateZ(0px)" }}
          ></div>
        </div>
        {/* <ProfileCard />
        <OtherPosts /> */}
      </div>
    </div>
  );
};


export default ProfileContainer;
