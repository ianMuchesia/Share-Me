
export type PostType = {
    id: number;
    title: string;
    description: string;
    image: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    votes: number;
    
}


export type CreatePostType = {
    prompt: string;
    title?:string;
    token: string;

}


