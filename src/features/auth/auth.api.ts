import { instance } from 'common/api/api'

export const authApi = {
    login: (data: LoginBodyType) => {
        return instance.post<UserProfileType>('auth/login', data)
    },
    logout: () => {
        return instance.delete<AuthResponseType>('auth/me')
    },
    register: (data: RegisterBodyType) => {
        return instance.post<RegisterResponseType>('auth/register', data)
    },
    me: () => {
        return instance.post<UserProfileType>('auth/me')
    },
    updateProfile: (data: UpdateProfileBodyType) => {
        return instance.put<UserProfileType>('auth/me', data)
    },
    forgotPassword: (data: ForgotPassBodyType) => {
        return instance.post<AuthResponseType>('auth/forgot', data)
    },
    setNewPassword: (data: SetNewPassBodyType) => {
        return instance.post<AuthResponseType>('auth/set-new-password', data)
    },
}

//TYPES
export type RegisterBodyType = Omit<LoginBodyType, 'rememberMe'>
export type UpdateProfileBodyType = {
    name: string
    avatar: string
}
export type LoginBodyType = {
    email: string
    password: string
    rememberMe: boolean
}
export type SetNewPassBodyType = {
    password: string
    resetPasswordToken: string //token from url
}
export type ForgotPassBodyType = {
    email: string
    from: string
    message: string
}
export type RegisterResponseType = {
    addedUser: Omit<UserProfileType, 'token' | 'tokenDeathTime' | 'avatar'>
}
export type AuthResponseType = {
    info: string
    error?: string
}
export type UserProfileType = {
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
    avatar: string
    error?: string
}
