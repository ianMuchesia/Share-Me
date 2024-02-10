import { PostType } from "@/@types/post";
import UseAddVote from "@/lib/AddVote";
import formatDate from "@/lib/FormateDate";
import Image from "next/image";
import React from "react";
import { IoIosThumbsUp } from "react-icons/io";

interface Props {
  post: PostType;
}
const OtherPostsCard = ({ post }: Props) => {
  const { handleVote, voted, isLoading } = UseAddVote();

  return (
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
      <Image
        src={post.image}
        height={50}
        width={100}
        alt={"picture"}
        className="h-50 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
      />
      <div className="flex flex-col justify-between">
        <h4 className="text-white font-semibold">prompt</h4>
        <p className="text-gray-400 text-xs my-1">{post.prompt}</p>
        <div className="flex justify-between items-center mt-3 text-white">
          <div className="flex flex-col">
            <small className="text-xs">{formatDate(post.createdAt)}</small>
            <div className="flex gap-4 items-center">
              <p
                className="text-sm font-semibold cursor-pointer"
                onClick={() => handleVote(post.id)}
              >
                <IoIosThumbsUp
                  size={25}
                  className={`${voted ? "text-[#bd255f]" : "text-white"}`}
                />
              </p>
              <p className="text-lg font-semibold">{post.voteCount}</p>
            </div>

            <p className="text-sm font-semibold">Vote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPostsCard;
