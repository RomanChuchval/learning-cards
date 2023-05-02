import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi, LoginDataType, ProfileType, RegisterDataType } from 'features/auth/auth.api';
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk';
import { appActions } from 'app/app.slice';

// const login = createAsyncThunk('auth/login', async (arg: LoginDataType, thunkAPI) => {
//     const { dispatch, getState, rejectWithValue } = thunkAPI;
//     const res = await authApi.login(arg);
//     dispatch(authActions.setProfile({ profile: res.data }));
// });

const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as ProfileType | null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile;
            })
            .addCase(register.rejected, (state, action) => {
                debugger;
            });
    },
});

const register = createAppAsyncThunk<void, RegisterDataType>(
    'auth/register',
    async (arg, thunkAPI) => {
        // const {dispatch, getState, rejectWithValue} = thunkAPI
        const res = await authApi.register(arg);
    }
);

const login = createAppAsyncThunk<{ profile: ProfileType }, LoginDataType>(
    'auth/login',
    async (arg, thunkAPI) => {
        const { dispatch, getState, rejectWithValue } = thunkAPI;
        const res = await authApi.login(arg);
        return { profile: res.data };
    }
);

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login };
