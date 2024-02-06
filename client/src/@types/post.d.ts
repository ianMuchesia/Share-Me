export type CreatePostType = {
  prompt: string;
  title?: string;
  token: string;
};

export type PostType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  prompt: string;
  image: string;
  voteCount: number;
  user_id: string;
  user: {
    id: string;
    username: string;
  };
};

export type NewPost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  prompt: string;
  image: string;
  voteCount: number;
};
