import { useAppSelector } from "@/store/hooks";
import { useVotePostMutation } from "@/store/services/postApi";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const UseAddVote = () => {
  const router = useRouter();
  const [voted, setVoted] = useState(false);

  const [handlePostVote, { isLoading }] = useVotePostMutation();

  const auth = useAppSelector((state) => state.auth.isAuthenticated);

  
  const handleVote = async (postId: string) => {
    if (!auth) {
      router.push(`/signin?redirect=${router.asPath}`);
      return;
    }
    try {
      const response = await handlePostVote(postId).unwrap();

     
      if (response == 1) {
        setVoted(true);
      }else{
        setVoted(false)
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Error liking post");
    }
  };
  return { handleVote, voted, isLoading };
};

export default UseAddVote;
