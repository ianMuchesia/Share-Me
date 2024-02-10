

export type RegisterType = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    profilepic?: string;
}


export type LoginType = {
    email: string;
    password: string;
}


export type UserType = {
    id: number;
    username: string;
    email: string;
    profilepic: string;
    createdAt: string;
    updatedAt: string;
}

export type AccessTokenType = {
    access_token: string;
    email: string;
    username: string;
    profilepic: string|null;
}



export type UserMeType ={
 
    email: string;
    username: string;
    profilepic: string|null;
}