import { createSlice } from '@reduxjs/toolkit'
import {
    authApi,
    LoginBodyType,
    UserProfileType,
    RegisterBodyType,
    ForgotPassBodyType,
    SetNewPassBodyType,
} from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'

const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as UserProfileType | null,
        redirectPath: '/' as '/auth/login' | '/auth/check-email' | '/',
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
            .addCase(logout.fulfilled, (state, action) => {
                state.profile = null
            })
            .addCase(authMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.redirectPath = action.payload.redirectPath
            })
            .addCase(setNewPassword.fulfilled, (state, action) => {
                state.redirectPath = action.payload.redirectPath
            })
    },
})

const register = createAppAsyncThunk<{ redirectPath: '/auth/login' }, RegisterBodyType>(
    'auth/register',
    async (data, thunkAPI) => {
        // const {dispatch, getState, rejectWithValue} = thunkAPI
        const res = await authApi.register(data)
        return { redirectPath: '/auth/login' }
    }
)

const login = createAppAsyncThunk<{ profile: UserProfileType }, LoginBodyType>(
    'auth/login',
    async (data, thunkAPI) => {
        // const { dispatch, getState, rejectWithValue } = thunkAPI
        const res = await authApi.login(data)
        return { profile: res.data }
    }
)

const logout = createAppAsyncThunk<void>('auth/logout', async (_, thunkAPI) => {
    await authApi.logout()
})

const authMe = createAppAsyncThunk<{ profile: UserProfileType }>('auth/me', async (_, thunkAPI) => {
    const res = await authApi.me()
    return { profile: res.data }
})

const forgotPassword = createAppAsyncThunk<
    { redirectPath: '/auth/check-email' },
    ForgotPassBodyType
>('auth/forgotPass', async (data, thunkAPI) => {
    const res = await authApi.forgotPassword(data)
    return { redirectPath: '/auth/check-email' }
})

const setNewPassword = createAppAsyncThunk<
    { info: string; error?: string; redirectPath: '/auth/login' },
    SetNewPassBodyType
>('auth/setNewPassword', async (data, thunkAPI) => {
    const res = await authApi.setNewPassword(data)
    return { info: res.data.info, error: res.data.error, redirectPath: '/auth/login' }
})

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = { register, login, logout, forgotPassword, setNewPassword, authMe }
