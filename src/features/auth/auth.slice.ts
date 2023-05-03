import { createSlice } from '@reduxjs/toolkit'
import { authApi, LoginBodyType, UserProfileType, RegisterBodyType } from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'

const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as UserProfileType | null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(register.rejected, (state, action) => {
                debugger
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.profile = null
            })
    },
})

const register = createAppAsyncThunk<void, RegisterBodyType>(
    'auth/register',
    async (data, thunkAPI) => {
        // const {dispatch, getState, rejectWithValue} = thunkAPI
        const res = await authApi.register(data)
    }
)

const login = createAppAsyncThunk<{ profile: UserProfileType }, LoginBodyType>(
    'auth/login',
    async (data, thunkAPI) => {
        const { dispatch, getState, rejectWithValue } = thunkAPI
        const res = await authApi.login(data)
        return { profile: res.data }
    }
)

const logout = createAppAsyncThunk('auth/logout', async (_, thunkAPI) => {
    await authApi.logout()
})

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = { register, login }
