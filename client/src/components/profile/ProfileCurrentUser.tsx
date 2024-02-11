import { logout } from "@/store/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

interface Props {
  posts: number;
}
const ProfileCurrentUser = ({ posts }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    await router.push("/");
    toast.success("Logged out successfully");

    localStorage.removeItem("token");

    dispatch(logout());
  };

  return (
    <div className="relative py-16 gradient-bg-artworks">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words gradient-bg-hero w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center b">
                <div className="relative ">
                  <Image
                    alt="profile pic"
                    src={
                      auth?.user?.profilepic
                        ? auth.user.profilepic
                        : "/user.png"
                    }
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                    width={150}
                    height={100}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0">
                  <button
                    className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center"></div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-200">
                      {posts}
                    </span>
                    <span className="text-sm text-white">posts</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center"></div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-white ">
                {auth?.user?.username}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i>
                Mombasa,Kenya
              </div>
              <div className="mb-2 text-gray-200 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-white"></i>
                Software Developer
              </div>
              <div className="mb-2 text-gray-200">
                <i className="fas fa-university mr-2 text-lg text-white"></i>
                University of Computer Science
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blue-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-white">
                    To create an image click on create on the navbar then you
                    will be routed to the create page and start prompting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative gradient-bg-artworks pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCurrentUser;
