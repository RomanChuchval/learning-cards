import { createSlice } from '@reduxjs/toolkit'
import { authApi, LoginBodyType, UserProfileType, RegisterBodyType } from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'

// const login = createAsyncThunk('auth/login', async (arg: LoginDataType, thunkAPI) => {
//     const { dispatch, getState, rejectWithValue } = thunkAPI;
//     const res = await authApi.login(arg);
//     dispatch(authActions.setProfile({ profile: res.data }));
// });

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
    },
})

const register = createAppAsyncThunk<void, RegisterBodyType>(
    'auth/register',
    async (arg, thunkAPI) => {
        // const {dispatch, getState, rejectWithValue} = thunkAPI
        const res = await authApi.register(arg)
    }
)

const login = createAppAsyncThunk<{ profile: UserProfileType }, LoginBodyType>(
    'auth/login',
    async (arg, thunkAPI) => {
        const { dispatch, getState, rejectWithValue } = thunkAPI
        const res = await authApi.login(arg)
        return { profile: res.data }
    }
)

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = { register, login }
