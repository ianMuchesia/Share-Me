import { useAppSelector } from "@/store/hooks";
import { useVotePostMutation } from "@/store/services/postApi";
import { useState } from "react";
import { toast } from "react-toastify";

// Custom hook to add vote to a post

const UseAddVote = () => {
  const [voted, setVoted] = useState(false);

  const [handlePostVote, { isLoading }] = useVotePostMutation();

  const auth = useAppSelector((state) => state.auth.isAuthenticated);

  const handleVote = async (postId: string) => {
    if (!auth) {
      toast.error("You need to be logged in to vote");
      return;
    }
    try {
      const response = await handlePostVote(postId).unwrap();

      if (response == 1) {
        setVoted(true);
      } else {
        setVoted(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error liking post");
    }
  };

  // Return the vote function and the loading state
  return { handleVote, voted, isLoading };
};

export default UseAddVote;
