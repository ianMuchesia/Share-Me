import { useAppSelector } from "@/store/hooks";
import ProfileCurrentPosts from "./ProfileCurrentPosts";
import ProfileCurrentUser from "./ProfileCurrentUser";
import { useGetMyPostsQuery } from "@/store/services/postApi";

const ProfileContainer = () => {
  const auth = useAppSelector((state) => state.auth);

  const { data, isLoading, error } = useGetMyPostsQuery(undefined);

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
        {isLoading && (
          <div className="flex justify-center items-center h-96">
            <p>Loading...</p>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center h-96 text-red-500">
            <p>An error occured</p>
          </div>
        )}
        {data && (
          <>
            {" "}
            <ProfileCurrentUser posts={data.length} />
            <ProfileCurrentPosts posts={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileContainer;
