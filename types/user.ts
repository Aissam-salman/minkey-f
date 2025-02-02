export type RegisterUser = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    stripeCustomerId: string,
}
export type LoginUser = {
    email: string,
    password: string,
}

export type UserProfile = {
    id: string,
    email: string,
    username: string,
    stripeCustId: string,
    photoUrl: string,
    plan: string,
}

export type UpdateUser = {
    firstname: string,
    lastname: string,
    email: string,
    bio: string,
    photoUrl: string,
}