import { instance } from 'common/api/api'

export const authApi = {
    register: (data: RegisterDataType) => {
        return instance.post<RegisterResponseType>('auth/register', data)
    },
    login: (data: LoginDataType) => {
        return instance.post<ProfileType>('auth/login', data)
    },
}

//TYPES
export type RegisterDataType = Omit<LoginDataType, 'rememberMe'>
export type RegisterResponseType = {
    addedUser: Omit<ProfileType, 'token' | 'tokenDeathTime'>
}
export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export type ProfileType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
    token: string
    tokenDeathTime: number
}
