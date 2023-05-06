import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    CreatePackModelType,
    GetPacksParamsType,
    packsApi, PacksResponseType,
    PackType,
    UpdatePackModelType
} from 'features/packs/packs.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'

const slice = createSlice({
    name: 'packs',
    initialState: {
        packs: {} as PacksResponseType,
        params: {
            page: '1',
            pageCount: '4',
            min: '0',
            max: '100',
            user_id: '',
            packName: ''
        } as GetPacksParamsType
    },
    reducers: {
        setQueryParams: (state, actions: PayloadAction<{ params: GetPacksParamsType }>) => {
            state.params = { ...state.params, ...actions.payload.params }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getPacks.fulfilled, (state, action) => {
                state.packs = action.payload.packs
            })
            .addCase(getPacks.rejected, (state, action) => {
                console.warn('rejectedGet')
            })
            .addCase(createPack.rejected, (state, action) => {
                console.warn('rejectedCreate')
            })
            .addCase(removePack.fulfilled, (state, action) => {
                const index = state.packs.cardPacks.findIndex(p => p._id === action.payload.pack._id)
                if (index !== -1) state.packs.cardPacks.slice(index, 1)
            })
            .addCase(removePack.rejected, (state, action) => {
                console.warn('rejectedRemove')
            })
    }
})

const getPacks = createAppAsyncThunk<{ packs: PacksResponseType }>(
    'packs/getPacks',
    async (data, thunkAPI) => {
        const { getState } = thunkAPI
        const params = getState().packs.params
        const res = await packsApi.getPacks(params)
        return { packs: res.data }
    }
)
const createPack = createAppAsyncThunk<void, CreatePackModelType>(
    'packs/createPack',
    async (data, thunkAPI) => {
        const {dispatch} = thunkAPI
        await packsApi.createPack(data)
        dispatch(packsThunks.getPacks())
    }
)
const removePack = createAppAsyncThunk<{ pack: PackType }, string>(
    'packs/removePack',
    async (data, thunkAPI) => {
        const res = await packsApi.removePack(data)
        return { pack: res.data.deletedCardsPack }
    }
)
const updatePack = createAppAsyncThunk<void, UpdatePackModelType>(
    'packs/updatePack',
    async (data, thunkAPI) => {
        const {dispatch} = thunkAPI
        await packsApi.updatePack(data)
        dispatch(packsThunks.getPacks())
    }
)

export const packsReducer = slice.reducer
export const packsAction = slice.actions
export const packsThunks = { getPacks, createPack, removePack, updatePack }