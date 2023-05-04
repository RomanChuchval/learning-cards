import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authApi, LoginBodyType, UserProfileType, RegisterBodyType } from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'

const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as UserProfileType | null,
        redirectPath: '/' as '/auth/login' | '/auth/check-email' | '/',
    },
    reducers: {
        setRedirectPath: (
            state,
            action: PayloadAction<{ redirectPath: '/auth/login' | '/auth/check-email' | '/' }>
        ) => {
            state.redirectPath = action.payload.redirectPath
        },
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(register.fulfilled, (state, action) => {
                state.redirectPath = action.payload.redirectTo
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.profile = null
            })
            .addCase(authMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
    },
})

const register = createAppAsyncThunk<{ redirectTo: '/auth/login' }, RegisterBodyType>(
    'auth/register',
    async (data, thunkAPI) => {
        // const {dispatch, getState, rejectWithValue} = thunkAPI
        const res = await authApi.register(data)
        return { redirectTo: '/auth/login' }
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

const logout = createAppAsyncThunk('auth/logout', async (_, thunkAPI) => {
    await authApi.logout()
})

const authMe = createAppAsyncThunk('auth/me', async (_, thunkAPI) => {
    const res = await authApi.me()
    return { profile: res.data }
})

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = { register, login, logout, authMe }
