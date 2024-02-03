

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
    accessToken: string;
    user: UserType;
}