import { createSlice } from '@reduxjs/toolkit'
import {
    authApi,
    LoginBodyType,
    UserProfileType,
    RegisterBodyType,
    ForgotPassBodyType,
    SetNewPassBodyType,
    UpdateProfileBodyType,
} from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'

const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as UserProfileType | null,
        redirectPath: '/' as RedirectPathType,
        checkEmailMessage: '' as string,
    },
    reducers: {
        clearRedirectPath: state => {
            state.redirectPath = '/'
        },
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(register.fulfilled, (state, action) => {
                state.redirectPath = action.payload.redirectPath
            })
            .addCase(logout.fulfilled, state => {
                state.profile = null
            })
            .addCase(authMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.checkEmailMessage = action.payload.checkEmailMessage
                state.redirectPath = action.payload.redirectPath
            })
            .addCase(setNewPassword.fulfilled, (state, action) => {
                state.redirectPath = action.payload.redirectPath
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
    },
})

const register = createAppAsyncThunk<{ redirectPath: RedirectPathType }, RegisterBodyType>(
    'auth/register',
    async data => {
        await authApi.register(data)
        return { redirectPath: '/auth/login' }
    }
)

const login = createAppAsyncThunk<{ profile: UserProfileType }, LoginBodyType>(
    'auth/login',
    async data => {
        const res = await authApi.login(data)
        return { profile: res.data }
    }
)

const logout = createAppAsyncThunk<void>('auth/logout', async () => {
    await authApi.logout()
})

const authMe = createAppAsyncThunk<{ profile: UserProfileType }>('auth/me', async () => {
    const res = await authApi.me()
    return { profile: res.data }
})

const forgotPassword = createAppAsyncThunk<
    { redirectPath: RedirectPathType; checkEmailMessage: string },
    ForgotPassBodyType
>('auth/forgotPass', async data => {
    await authApi.forgotPassword(data)
    return { redirectPath: '/auth/check-email', checkEmailMessage: data.email }
})

const setNewPassword = createAppAsyncThunk<
    { info: string; error?: string; redirectPath: RedirectPathType },
    SetNewPassBodyType
>('auth/setNewPassword', async data => {
    const res = await authApi.setNewPassword(data)
    return { info: res.data.info, error: res.data.error, redirectPath: '/auth/login' }
})
const updateProfile = createAppAsyncThunk<{ profile: UserProfileType }, UpdateProfileBodyType>(
    'auth/updateProfile',
    async data => {
        const res = await authApi.updateProfile(data)
        return { profile: res.data.updatedUser }
    }
)

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = {
    register,
    login,
    logout,
    forgotPassword,
    setNewPassword,
    authMe,
    updateProfile,
}

// TYPES
export type RedirectPathType = '/auth/login' | '/auth/check-email' | '/'
