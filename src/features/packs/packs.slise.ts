import { createSlice } from '@reduxjs/toolkit'
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
        packs: {} as PacksResponseType
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPacks.fulfilled, (state, action) => {
                state.packs = action.payload.packs
            })
            .addCase(getPacks.rejected, (state, action) => {
                console.warn('rejectedGet')
            })
            .addCase(createPack.fulfilled, (state, action) => {
                state.packs.cardPacks.unshift(action.payload.pack)
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
            .addCase(updatePack.fulfilled, (state, action) => {
                const index = state.packs.cardPacks.findIndex(p => p._id === action.payload.pack._id)
                if (index !== -1) state.packs.cardPacks[index] = action.payload.pack
            })
    }
})

const getPacks = createAppAsyncThunk<{ packs: PacksResponseType }, GetPacksParamsType>(
    'packs/getPacks',
    async (data, thunkAPI) => {
        const res = await packsApi.getPacks(data)
        return { packs: res.data }
    }
)
const createPack = createAppAsyncThunk<{ pack: PackType }, CreatePackModelType>(
    'packs/createPack',
    async (data, thunkAPI) => {
        const res = await packsApi.createPack(data)
        return { pack: res.data.newCardsPack }
    }
)
const removePack = createAppAsyncThunk<{ pack: PackType }, string>(
    'packs/removePack',
    async (data, thunkAPI) => {
        const res = await packsApi.removePack(data)
        return { pack: res.data.deletedCardsPack }
    }
)
const updatePack = createAppAsyncThunk<{ pack: PackType }, UpdatePackModelType>(
    'packs/updatePack',
    async (data, thunkAPI) => {
        const res = await packsApi.updatePack(data)
        return { pack: res.data.updatedCardsPack }
    }
)


export const packsReducer = slice.reducer
export const packsThunks = { getPacks, createPack, removePack, updatePack }