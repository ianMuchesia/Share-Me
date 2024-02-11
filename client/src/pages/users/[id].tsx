import { OtherPosts, ProfileCard } from "@/components/profile";
import React from "react";
import { baseUrl } from "@/lib/BaseURL";
import { UserType } from "@/@types/auth";
import { GetStaticPropsContext } from "next";
import { PostType } from "@/@types/post";
import axios from "axios";

interface Props {
  user: UserType;
  posts: PostType[];
}


//This dynamic page will display the user's profile and their posts
const UserProfile = ({ user, posts }: Props) => {
  return (
    <div className="gradient-bg-hero ">
      <div className="profile-page">
        <div className="relative block h-[500px]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(/Designer.png)`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-90 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
            style={{ transform: "translateZ(0px)" }}
          ></div>
        </div>
        <ProfileCard user={user} posts={posts.length} />
        <OtherPosts posts={posts} />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  try {
    const { data } = await axios.get<UserType[]>(`${baseUrl}/users`);

    const paths = data.map((user) => ({
      params: { id: user.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error: any) {
    return { paths: [], fallback: false };
  }
};
export const getStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const id = context.params?.id;
    const { data: user } = await axios.get<UserType>(`${baseUrl}/users/${id}`);

    const { data: posts } = await axios.get(`${baseUrl}/posts/user/${id}`);

    return {
      props: {
        user,
        posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default UserProfile;
