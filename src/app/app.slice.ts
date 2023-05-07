import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fulfilledWithInfo, initializePending, loginFulfilled, rejected } from 'app/constants'

const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as string | null,
        infoMessage: null as string | null,
        isLoading: false,
        isAppInitialized: false,
    },
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading
        },
        resetAppInfo: state => {
            state.error = null
            state.infoMessage = null
        },
        setAppInitialize: state => {
            state.isAppInitialized = false
        },
    },
    extraReducers: builder => {
        builder
            .addMatcher(fulfilledWithInfo, (state, action) => {
                state.infoMessage = action.payload.info
            })
            .addMatcher(loginFulfilled, (state, action) => {
                state.infoMessage = `Hello, ${action.payload.profile.name} !`
            })
            .addMatcher(initializePending, state => {
                state.isAppInitialized = true
            })
            .addMatcher(rejected, (state, action) => {
                state.error = action.payload as string
            })
    },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
